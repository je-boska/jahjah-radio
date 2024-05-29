import type { Metadata } from 'next';
import { Inter, Caprasimo } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const caprasimo = Caprasimo({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-caprasimo',
});

export const metadata: Metadata = {
  title: 'JAH JAH Radio',
  description:
    'JAH JAH Radio is an independent, non-profit internet radio station located in Paris.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${caprasimo.variable}`}>
        {children}
      </body>
    </html>
  );
}
