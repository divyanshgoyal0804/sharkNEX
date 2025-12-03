import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { MotionProvider } from '@/components/providers/MotionProvider';
import './globals.css';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

// Site metadata for SEO
export const metadata: Metadata = {
  title: 'Sharkspace Coworking - Noida Sector 132 | Premium Workspaces',
  description:
    'Premium hot desks, dedicated desks & private cabins on Noida Expressway. 24×7 access, meeting rooms, enterprise Wi-Fi. Book a free tour today.',
  keywords:
    'coworking noida, coworking sector 132, managed office noida expressway, private cabin noida',
  authors: [{ name: 'Sharkspace' }],
  creator: 'Sharkspace',
  publisher: 'Sharkspace',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Sharkspace Coworking - Noida Sector 132 | Premium Workspaces',
    description:
      'Premium hot desks, dedicated desks & private cabins on Noida Expressway. 24×7 access, meeting rooms, enterprise Wi-Fi. Book a free tour today.',
    url: 'https://sharkspace.in',
    siteName: 'Sharkspace Coworking',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharkspace Coworking - Noida Sector 132 | Premium Workspaces',
    description:
      'Premium hot desks, dedicated desks & private cabins on Noida Expressway. 24×7 access, meeting rooms, enterprise Wi-Fi.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        {/* Google Tag Manager - to be added in analytics phase */}
        {/* <script>...</script> */}
      </head>
      <body className="bg-cream font-body text-slate-navy antialiased">
        {/* Google Tag Manager (noscript) - to be added in analytics phase */}
        {/* <noscript>...</noscript> */}
        <MotionProvider>
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
