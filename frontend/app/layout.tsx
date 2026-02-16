import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Rishi Robotics - Master Python, AI, ML, Deep Learning & Robotics',
  description: 'Comprehensive tutorials and hands-on projects for learning Python, Artificial Intelligence, Machine Learning, Deep Learning, and Robotics. From beginner to advanced.',
  openGraph: {
    title: 'Rishi Robotics - Master Python, AI, ML & Robotics',
    description: 'Learn cutting-edge technology through comprehensive tutorials and hands-on projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishi Robotics - Master Python, AI, ML & Robotics',
    description: 'Learn cutting-edge technology through comprehensive tutorials',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}


