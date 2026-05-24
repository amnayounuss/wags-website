export default function Contact() {
  return (
    <>
      <section id="contact">
  <div className="contact-orb"></div>
  <div className="contact-orb-2"></div>
  <div className="container">
    <div className="contact-inner">
      <div className="contact-info reveal from-left">
        <div className="section-label">Get In Touch</div>
        <h2>Ready to Transform Your Business?</h2>
        <p>Let's discuss your ERP requirements — free consultation, no commitment. Our team will respond within 24 hours.</p>
        <div className="contact-details">
          <div className="contact-detail"><div className="lg-icon-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>info@wags.sa</div>
          <div className="contact-detail"><div className="lg-icon-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>Taawun Area, Riyadh, Saudi Arabia</div>
          <div className="contact-detail"><div className="lg-icon-sm"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>www.wags.sa</div>
        </div>
      </div>
      <div className="contact-form reveal from-right">
        <div className="form-row">
          <div className="form-group"><label htmlFor="name">Full Name</label><input type="text" id="name" placeholder="Ahmed Al-Rashidi" /></div>
          <div className="form-group"><label htmlFor="company">Company Name</label><input type="text" id="company" placeholder="Your Company" /></div>
        </div>
        <div className="form-row">
          <div className="form-group"><label htmlFor="email">Email Address</label><input type="email" id="email" placeholder="ahmed@company.sa" /></div>
          <div className="form-group"><label htmlFor="phone">Phone Number</label><input type="tel" id="phone" placeholder="+966 5x xxx xxxx" /></div>
        </div>
        <div className="form-group">
          <label htmlFor="service">What are you looking for?</label>
          <select id="service" defaultValue="">
            <option value="" disabled>Select a service...</option>
            <option>ERP Implementation</option>
            <option>POS Integration</option>
            <option>Custom Odoo Module</option>
            <option>ZATCA Compliance</option>
            <option>Other</option>
          </select>
        </div>
        <div className="form-group"><label htmlFor="message">Message (optional)</label><textarea id="message" placeholder="Tell us about your business needs..."></textarea></div>
        <div className="form-actions">
          <button className="btn-primary" style={{"justifyContent":"center"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg> Book My Free Consultation</button>
          
          
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
