export default function Navbar() {
  return (
    <>
      <nav id="navbar">
  <div className="nav-shell">
    <div className="nav-inner">
      <a href="#hero" className="nav-logo">
        <img src="/logo.svg" alt="WAGS Tech Logo" style={{ width: '38px', height: '38px', objectFit: 'contain' }} />
        <span className="nav-logo-text">WAGS Tech</span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#why">Why Us</a>
        <a href="#process">Process</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="#contact" className="btn-primary nav-cta">Book a Call</a>
      <button className="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
<div className="mobile-menu">
  <a href="#about">About</a>
  <a href="#why">Why Us</a>
  <a href="#process">Process</a>
  <a href="#services">Services</a>
  <a href="#contact">Contact</a>
  <a href="#contact" className="btn-primary mobile-cta">Book a Call</a>
</div>
    </>
  );
}
