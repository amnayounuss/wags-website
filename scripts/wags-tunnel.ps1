# -------------------------------------------------------------
# WAGS permanent tunnel - keeps the site + ngrok tunnel alive.
#
#   (default)  check everything, fix what is down, print the URL, exit
#   -Watch     same check on a loop every -IntervalSeconds, forever
#
# Both modes are idempotent - nothing is restarted if it is already healthy.
# ASCII only on purpose: Windows PowerShell 5.1 misreads UTF-8 .ps1 files.
#
#   powershell -ExecutionPolicy Bypass -File scripts\wags-tunnel.ps1
#   powershell -ExecutionPolicy Bypass -File scripts\wags-tunnel.ps1 -Watch
# -------------------------------------------------------------

param(
  [switch]$Watch,
  [int]$IntervalSeconds = 60,
  [int]$Port = 3000,
  # 'dev' serves `next dev`; 'start' serves the production build - use 'start'
  # for a URL you actually hand out to people.
  [ValidateSet('dev', 'start')]
  [string]$Mode = 'dev'
)

$ErrorActionPreference = 'Stop'

$ProjectDir  = Split-Path -Parent $PSScriptRoot
$TunnelName  = 'wags'
$NgrokConfig = Join-Path $env:LOCALAPPDATA 'ngrok\ngrok.yml'
$LogDir      = Join-Path $ProjectDir '.tunnel-logs'
$LogFile     = Join-Path $LogDir 'tunnel.log'

if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Path $LogDir | Out-Null }

function Write-Log($msg) {
  $line = "$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')  $msg"
  Add-Content -Path $LogFile -Value $line -Encoding utf8
  Write-Output $line
}

function Test-PortListening($p) {
  $null -ne (Get-NetTCPConnection -LocalPort $p -State Listen -ErrorAction SilentlyContinue)
}

function Ensure-App {
  if (Test-PortListening $Port) { return }

  Write-Log "app: not listening on :$Port - starting (mode=$Mode)"
  if ($Mode -eq 'start') {
    if (-not (Test-Path (Join-Path $ProjectDir '.next\BUILD_ID'))) {
      Write-Log 'app: no production build - running npm run build (takes a few minutes)'
      Start-Process -FilePath 'cmd.exe' -ArgumentList '/c', 'npm run build' `
        -WorkingDirectory $ProjectDir -WindowStyle Hidden -Wait
    }
    Start-Process -FilePath 'cmd.exe' -ArgumentList '/c', "npm run start -- -p $Port" `
      -WorkingDirectory $ProjectDir -WindowStyle Hidden
  } else {
    Start-Process -FilePath 'cmd.exe' -ArgumentList '/c', "npm run dev -- -p $Port" `
      -WorkingDirectory $ProjectDir -WindowStyle Hidden
  }

  for ($i = 0; $i -lt 45; $i++) {
    Start-Sleep -Seconds 2
    if (Test-PortListening $Port) { break }
  }
  if (Test-PortListening $Port) { Write-Log "app: up on :$Port" }
  else { Write-Log "app: WARNING still not listening on :$Port" }
}

function Ensure-Tunnel {
  if (Get-Process ngrok -ErrorAction SilentlyContinue) { return }

  # Use the named tunnel only once a real reserved domain has been filled in,
  # otherwise fall back to an ephemeral URL so the site is at least reachable.
  $named = $false
  if (Test-Path $NgrokConfig) {
    $cfg = Get-Content $NgrokConfig -Raw
    if ($cfg -match "(?m)^\s\s$TunnelName\s*:" -and $cfg -notmatch 'PLACEHOLDER_DOMAIN') { $named = $true }
  }

  if ($named) {
    Write-Log "tunnel: starting named tunnel '$TunnelName' (reserved domain)"
    Start-Process -FilePath 'ngrok' -ArgumentList 'start', $TunnelName -WindowStyle Hidden
  } else {
    Write-Log 'tunnel: no reserved domain yet - starting an EPHEMERAL tunnel (URL changes on restart).'
    Write-Log 'tunnel: reserve the free static domain at https://dashboard.ngrok.com/domains, then'
    Write-Log "tunnel: replace PLACEHOLDER_DOMAIN in $NgrokConfig to make the URL permanent."
    Start-Process -FilePath 'ngrok' -ArgumentList 'http', "$Port" -WindowStyle Hidden
  }
  Start-Sleep -Seconds 8
}

function Report-Url {
  try {
    $api = Invoke-RestMethod 'http://127.0.0.1:4040/api/tunnels' -ErrorAction Stop
    if ($api.tunnels) {
      foreach ($t in $api.tunnels) { Write-Log "public: $($t.public_url) -> $($t.config.addr)" }
    } else {
      Write-Log 'public: ngrok is running but reports no tunnels'
    }
  } catch {
    Write-Log "public: could not read the ngrok agent API - $($_.Exception.Message)"
  }
}

function Invoke-HealthCheck {
  Ensure-App
  Ensure-Tunnel
  Report-Url
}

if ($Watch) {
  Write-Log "watchdog: started (every $IntervalSeconds s, mode=$Mode, port=$Port)"
  while ($true) {
    try { Invoke-HealthCheck } catch { Write-Log "watchdog: $($_.Exception.Message)" }
    Start-Sleep -Seconds $IntervalSeconds
  }
} else {
  Invoke-HealthCheck
}
