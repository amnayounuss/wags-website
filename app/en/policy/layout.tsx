import type { Metadata } from 'next';

// Metadata lives in this server layout; the page itself is a client component
// (it pulls in the react-icons-based Navbar, which Next 15 can only chunk
// cleanly when the whole page is on the client side).
export const metadata: Metadata = {
  title: 'Privacy Policy & Terms of Service | WAGS Tech',
  description:
    'WAGS Tech privacy policy and terms of service, including the Google Business Profile review integration data disclosure.',
  alternates: {
    canonical: '/en/policy',
    languages: { en: '/en/policy', ar: '/ar/policy' },
  },
};

export default function EnPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
