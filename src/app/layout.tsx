// src/app/layout.tsx
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Code Snapshots | VS Code Extension',
    template: '%s | Code Snapshots Documentation'
  },
  description: 'A dead-simple snapshot system for VS Code that works alongside Git',
  keywords: ['VS Code', 'extension', 'snapshot', 'git', 'version control', 'backup', 'coding'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Code Snapshots | VS Code Extension',
    description: 'A dead-simple snapshot system for VS Code that works alongside Git',
    url: 'https://code-snapshots.dev',
    siteName: 'Code Snapshots',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}