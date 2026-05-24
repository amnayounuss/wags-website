import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh', background: '#050B1A' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', color: 'rgba(255,255,255,0.85)' }}>
        
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: '#fff', marginBottom: '40px', fontFamily: 'Sora', letterSpacing: '-0.02em' }}>
          Privacy Policy
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', fontSize: '16px', lineHeight: 1.8 }}>
          <p>
            <strong style={{ color: '#fff' }}>Welcome to WAGS Tech!</strong> At WAGS Tech, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our software solutions and visit our website. Please note that WAGS Tech does not access, store, or use any personal or client-specific data that you process through our software. Your data is entirely under your control.
          </p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '20px', fontFamily: 'Sora' }}>Information We Collect</h2>
          <p>When you interact with WAGS Tech, we may collect limited information in the following ways:</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong style={{ color: '#fff' }}>Information You Provide:</strong> We may collect information that you voluntarily provide to us when you contact us for support or inquiries. This may include your name, email address, and phone number. However, we do not collect, access, or store any client-specific data processed by our software solutions.</li>
            <li><strong style={{ color: '#fff' }}>Automatically Collected Information:</strong> We may collect certain technical information about your device and usage patterns when you visit our website. This includes data such as your IP address, browser type, and operating system. However, this information is limited to website visits and does not include any client or user data processed by our software solutions.</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '20px', fontFamily: 'Sora' }}>How We Use Your Information</h2>
          <p>We do not use, access, or process any client-specific data through our software. The information we collect is strictly limited to the following purposes:</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>To respond to inquiries and provide support regarding our software and services.</li>
            <li>To communicate with you about updates, maintenance, or relevant service information.</li>
            <li>To gather usage statistics of our website solely to improve user experience.</li>
          </ul>
          <p>WAGS Tech does not use any personal or client data processed through the software solutions for any other purposes.</p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '20px', fontFamily: 'Sora' }}>Information Sharing and Disclosure</h2>
          <p>WAGS Tech does not share, disclose, or sell any data processed through our software solutions, as we do not access or store this information. The limited information we collect (e.g., inquiries or support requests) is also not shared with any third parties, except in the following situations:</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>To comply with legal obligations or enforce our legal rights.</li>
            <li>If necessary, to respond to legal processes or regulatory requests.</li>
          </ul>

          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '20px', fontFamily: 'Sora' }}>Data Security</h2>
          <p>Although WAGS Tech does not access or store client-specific data, we take the security of our systems and communications seriously. Any interactions or data you provide to us directly (e.g., support requests) are protected through reasonable security measures. However, please note that no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.</p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '20px', fontFamily: 'Sora' }}>Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and we encourage you to review the policy periodically to stay informed about how we protect your information. Updates will only apply to future interactions and will not affect data that has already been handled.</p>

          <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#fff', marginTop: '20px', fontFamily: 'Sora' }}>Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:info@wags.sa" style={{ color: '#00f0ff', textDecoration: 'underline' }}>info@wags.sa</a>.</p>
        </div>
        
      </div>
      </main>
      <Footer />
    </>
  );
}
