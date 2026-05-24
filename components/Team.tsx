'use client';
import React from 'react';

export default function Team() {
  const team = [
    {
      name: "Abdul Latif",
      title: "Chief Executive Officer",
      bio: "Leads the company vision, strategy, and client relationships across the region.",
      email: "Aw@wags.sa",
      initials: "AL",
      image: null
    },
    {
      name: "Haroon Hayat",
      title: "Chief Operating Officer",
      bio: "Oversees day-to-day operations, project delivery, and team performance.",
      email: "haroon@wags.sa",
      initials: "HH",
      image: "/haroon-bhai.png"
    },
    {
      name: "Syed Danish",
      title: "Chief Technology Officer",
      bio: "Drives technical architecture, ERP customization, and platform innovation.",
      email: "danish@wags.sa",
      initials: "SD",
      image: "/danish-bhai.png"
    }
  ];

  return (
    <>
      <section id="team" style={{ padding: '120px 0', position: 'relative' }}>
        <div className="container">
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div className="section-label" style={{ display: 'inline-block', marginBottom: '24px', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', color: '#00f0ff', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Our Team</div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.1, marginBottom: '24px', fontWeight: 800, fontFamily: 'Sora', color: '#fff' }}>Meet the <span style={{ background: 'linear-gradient(135deg, #00f0ff, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Leadership</span></h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>The people behind every successful WAGS implementation.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
            {team.map((member, i) => (
              <div 
                key={i} 
                style={{ 
                  flex: '1 1 280px',
                  maxWidth: '380px',
                  background: 'rgba(8, 10, 15, 0.65)', 
                  backdropFilter: 'blur(20px)', 
                  WebkitBackdropFilter: 'blur(20px)', 
                  border: '1px solid rgba(255, 255, 255, 0.04)', 
                  borderTop: '1px solid rgba(0, 240, 255, 0.15)', 
                  borderRadius: '24px', 
                  padding: '40px', 
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderTop = '1px solid rgba(0, 240, 255, 0.6)';
                  e.currentTarget.style.boxShadow = '0 30px 60px -10px rgba(0, 240, 255, 0.15)';
                  e.currentTarget.style.background = 'rgba(12, 15, 25, 0.8)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderTop = '1px solid rgba(0, 240, 255, 0.15)';
                  e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0,0,0,0.8)';
                  e.currentTarget.style.background = 'rgba(8, 10, 15, 0.65)';
                }}
              >
                
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', overflow: 'hidden', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '2px solid rgba(0, 240, 255, 0.2)', boxShadow: '0 10px 20px -5px rgba(0,0,0,0.5)' }}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ fontSize: '28px', fontWeight: 800, color: '#fff', fontFamily: 'Sora' }}>{member.initials}</span>
                  )}
                </div>
                
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '8px', fontFamily: 'Sora', letterSpacing: '-0.02em' }}>{member.name}</h3>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#00f0ff', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px' }}>{member.title}</div>
                
                <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, flexGrow: 1, marginBottom: '24px' }}>{member.bio}</p>
                
                <div style={{ height: '1px', width: '100%', background: 'rgba(255,255,255,0.05)', marginBottom: '24px' }}></div>
                
                <a href={`mailto:${member.email}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.8)', fontSize: '14px', fontWeight: 600, textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> 
                  {member.email}
                </a>
                
              </div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}
