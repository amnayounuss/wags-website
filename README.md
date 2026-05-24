# WAGS Tech - Next.js Website

A modern, fully responsive website for WAGS Tech built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**.

## Features

✨ **Modern Stack**
- Next.js 15 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design for all devices

🎨 **Components & Sections**
- Navbar with mobile menu
- Hero section with animated dashboard
- Client testimonials carousel
- About section with vision/mission
- Why Choose Us features
- 4-step process timeline
- 12+ service modules with filtering
- Integrations showcase with 3D cube
- Team leadership section
- Contact form
- Footer with links

⚡ **Performance**
- Optimized animations
- Smooth scrolling
- Particles background
- Scroll progress indicator
- Back-to-top button

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Build & Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Clients.tsx
│   ├── About.tsx
│   ├── WhyChoose.tsx
│   ├── Process.tsx
│   ├── Services.tsx
│   ├── Integrations.tsx
│   ├── Team.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/
│   └── scripts/
│       └── main.js         # Client-side functionality
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Customization

### Colors
Edit the color palette in `tailwind.config.ts`:
- `navy` - Primary dark blue
- `teal` - Primary accent color
- `violet` - Secondary accent
- And more...

### Fonts
The site uses:
- **Sora** - Headlines and logos
- **DM Sans** - Body text

Both are imported from Google Fonts in `app/globals.css`.

### Content
Edit the content in each component file:
- `components/*.tsx` - Main content sections
- Text, links, and data can be easily modified

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

- Images are optimized with Next.js Image component (when added)
- CSS is minified in production
- JavaScript is code-split automatically
- Animations use CSS and requestAnimationFrame for smooth 60fps

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS
- Docker
- Self-hosted servers

## Contact & Support

**WAGS Tech**
- Email: info@wags.sa
- Website: www.wags.sa
- Location: Taawun Area, Riyadh, Saudi Arabia

## License

© 2025 WAGS Tech EST. All rights reserved.
