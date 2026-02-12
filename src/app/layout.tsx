import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import WindowFrame from '@/components/WindowFrame';
import LenisScroll from '@/components/LenisScroll';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'alvoLabs',
  description: 'Portfolio of Alvin Binoy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${jetbrainsMono.variable} ${spaceGrotesk.variable} bg-black antialiased overflow-hidden font-mono`}>
        <LenisScroll />
        <WindowFrame>
          {children}
        </WindowFrame>
      </body>
    </html>
  );
}
