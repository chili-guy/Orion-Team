import './globals.css';
import type { Metadata } from 'next';
import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Orion Team - Software House',
  description: 'Especializada em projeto e desenvolvimento de software de alta complexidade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={exo2.className}>{children}</body>
    </html>
  );
}
