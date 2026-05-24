const fs = require('fs');

let c = fs.readFileSync('components/Integrations.tsx', 'utf8');
c = c.replace(/stroke-opacity/g, 'strokeOpacity').replace(/stroke-linejoin/g, 'strokeLinejoin');
fs.writeFileSync('components/Integrations.tsx', c);

let c2 = fs.readFileSync('components/Contact.tsx', 'utf8');
c2 = c2.replace('<option value="" disabled selected>', '<option value="" disabled>');
c2 = c2.replace('<select id="service">', '<select id="service" defaultValue="">');
fs.writeFileSync('components/Contact.tsx', c2);

console.log('Fixed DOM properties');
