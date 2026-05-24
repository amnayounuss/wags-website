'use client';
import React from 'react';

export default function Clients() {
  const clientsList = [
    { name: 'Reeq Alnahl' },
    { name: 'Breehant Roastery' },
    { name: 'Okawa' },
    { name: 'Camel Step' },
    { name: 'Order (اوردر)' },
    { name: 'Zarafa' },
    { name: 'CST' },
    { name: 'Namq (نمق)' },
    { name: 'Landscape Contracting' },
    { name: 'Peacock Cafe' },
    { name: 'AAB Group' },
    { name: 'Placemakers Factory' },
    { name: 'Kuf Roasters' },
    { name: 'Perfect Pick' },
    { name: 'Anoosh' },
    { name: 'CST Partner' },
  ];

  // Duplicate for seamless marquee
  const tickerItems = [...clientsList, ...clientsList, ...clientsList];

  return (
    <>
      <section id="clients" style={{ padding: '80px 0', position: 'relative' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', color: '#fff', fontWeight: 600, fontFamily: 'Sora', margin: 0 }}>
              Trusted by 50+ businesses across retail, F&B, contracting, and more
            </p>
          </div>
        </div>

        <div className="ticker-wrapper" style={{ marginTop: '30px' }}>
          <div className="ticker-track" style={{ gap: '100px', paddingRight: '100px' }}>
            {tickerItems.map((c, i) => (
              <div 
                key={i} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  color: 'rgba(255, 255, 255, 0.6)',
                  transition: 'color 0.3s ease',
                  cursor: 'default',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                }}
              >
                <span style={{ fontSize: '24px', fontWeight: 700, fontFamily: 'Sora', letterSpacing: '-0.02em' }}>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
