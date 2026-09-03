'use client';
import PolicyContent from '@/components/PolicyContent';

// /en/policy — the URL registered with Google as our privacy policy and terms
// of service. Metadata is in the sibling layout.tsx.
export default function EnPolicyPage() {
  return <PolicyContent locale="en" />;
}
