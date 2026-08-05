# -------------------------------------------------------------
# Makes the tunnel permanent: a Startup-folder shortcut launches
# wags-tunnel.ps1 -Watch at every logon, and that watchdog restarts
# the site or the tunnel whenever either one dies.
#
# No administrator rights needed (Register-ScheduledTask does need
# them on this machine, which is why the Startup folder is used).
# ASCII only on purpose: Windows PowerShell 5.1 misreads UTF-8 .ps1 files.
#
#   Install:  powershell -ExecutionPolicy Bypass -File scripts\install-wags-tunnel.ps1
#   Remove:   powershell -ExecutionPolicy Bypass -File scripts\install-wags-tunnel.ps1 -Uninstall
# -------------------------------------------------------------

param(
  [switch]$Uninstall,
  [ValidateSet('dev', 'start')]
  [string]$Mode = 'dev'
)

$ErrorActionPreference = 'Stop'

$Script       = Join-Path $PSScriptRoot 'wags-tunnel.ps1'
$StartupDir   = [Environment]::GetFolderPath('Startup')
$ShortcutPath = Join-Path $StartupDir 'WAGS Tunnel.lnk'

if ($Uninstall) {
  if (Test-Path $ShortcutPath) {
    Remove-Item $ShortcutPath -Force
    Write-Output "Removed $ShortcutPath"
  } else {
    Write-Output 'Nothing to remove - no Startup shortcut found.'
  }
  Write-Output 'Running processes are left alone. Stop them with:'
  Write-Output '  Get-Process ngrok | Stop-Process -Force'
  return
}

if (-not (Test-Path $Script)) { throw "Missing $Script" }

$shell    = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut($ShortcutPath)
$shortcut.TargetPath       = (Get-Command powershell.exe).Source
$shortcut.Arguments        = "-NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File `"$Script`" -Watch -Mode $Mode"
$shortcut.WorkingDirectory = (Split-Path -Parent $PSScriptRoot)
$shortcut.Description      = 'Keeps the WAGS Tech site and its ngrok tunnel running.'
$shortcut.WindowStyle      = 7
$shortcut.Save()

Write-Output "Installed: $ShortcutPath"
Write-Output "Mode:      $Mode (re-run with -Mode start to serve the production build)"
Write-Output ''
Write-Output 'Start it now without logging out:'
Write-Output "  powershell -ExecutionPolicy Bypass -File `"$Script`" -Watch -Mode $Mode"
Write-Output ''
Write-Output 'Logs: .tunnel-logs\tunnel.log'
