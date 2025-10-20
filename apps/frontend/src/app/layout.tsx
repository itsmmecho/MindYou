import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monorepo Frontend (Next.js App Router)',
  description: 'Frontend powered by Next.js App Router + Express backend'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '2rem' }}>{children}</body>
    </html>
  );
}
