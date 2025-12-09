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

// Site metadata for SEO - Optimized for Noida Expressway, Coworking, Shared Office, Sector 132
export const metadata: Metadata = {
  metadataBase: new URL('https://sharkspace.in'),
  title: {
    default: 'Sharkspace Coworking Sector 132 Noida Expressway | Shared Office Space',
    template: '%s | Sharkspace Coworking Noida',
  },
  description:
    'Best coworking space in Sector 132 Noida Expressway. Premium shared office, hot desks, dedicated desks & private cabins. 24×7 access, high-speed WiFi, meeting rooms. Near Sector 142 Metro. Book free tour!',
  keywords: [
    'coworking space noida expressway',
    'shared office sector 132',
    'coworking noida',
    'coworking sector 132',
    'shared office noida expressway',
    'office space sector 132 noida',
    'coworking near sector 142 metro',
    'managed office noida expressway',
    'private cabin noida',
    'hot desk noida',
    'dedicated desk noida expressway',
    'flexible workspace sector 132',
    'business center noida expressway',
    'startup office noida',
    'coworking space near me noida',
    'office on rent sector 132',
    'plug and play office noida',
    'virtual office noida expressway',
  ],
  authors: [{ name: 'Sharkspace', url: 'https://sharkspace.in' }],
  creator: 'Sharkspace Coworking',
  publisher: 'Sharkspace Coworking',
  category: 'Business',
  classification: 'Coworking Space, Shared Office, Business Center',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://sharkspace.in',
  },
  openGraph: {
    title: 'Sharkspace Coworking | Best Shared Office Space Sector 132 Noida Expressway',
    description:
      'Premium coworking & shared office space on Noida Expressway Sector 132. Hot desks from ₹500/day, dedicated desks ₹7000/month, private cabins available. 24×7 access, meeting rooms, high-speed WiFi. 5 min from Sector 142 Metro.',
    url: 'https://sharkspace.in',
    siteName: 'Sharkspace Coworking',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Sharkspace Coworking Space Sector 132 Noida Expressway - Premium Shared Office',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sharkspace Coworking | Shared Office Sector 132 Noida Expressway',
    description:
      'Best coworking space in Sector 132 Noida Expressway. Hot desks, dedicated desks, private cabins. 24×7 access, high-speed WiFi. Book free tour!',
    images: ['/og-image.webp'],
    creator: '@sharkspace',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add your Google Search Console verification code
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Noida',
    'geo.position': '28.5060;77.3801',
    'ICBM': '28.5060, 77.3801',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data for SEO
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'CoworkingSpace',
    '@id': 'https://sharkspace.in/#organization',
    name: 'Sharkspace Coworking',
    alternateName: 'Sharkspace',
    description:
      'Premium coworking space in Sector 132 Noida Expressway offering shared office, hot desks, dedicated desks, and private cabins with 24/7 access.',
    url: 'https://sharkspace.in',
    telephone: '+91-8800879701',
    email: 'hello@sharkspace.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sector 132',
      addressLocality: 'Noida',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201304',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.506,
      longitude: 77.3801,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'High-Speed WiFi', value: true },
      { '@type': 'LocationFeatureSpecification', name: '24/7 Access', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Meeting Rooms', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Private Cabins', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Pantry', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'Reception Services', value: true },
      { '@type': 'LocationFeatureSpecification', name: 'CCTV Security', value: true },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Coworking Plans',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Day Pass',
          description: 'Flexible daily access with high-speed WiFi and amenities',
          price: '500',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Dedicated Desk',
          description: 'Personal desk with high-speed WiFi, parking & promotion',
          price: '7000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        {
          '@type': 'Offer',
          name: 'Private Cabin',
          description: 'Lockable private cabin with storage included',
          price: '8000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
      ],
    },
    areaServed: [
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Greater Noida' },
      { '@type': 'City', name: 'Delhi NCR' },
    ],
    sameAs: [
      'https://www.instagram.com/sharkspace.in/',
      'https://www.linkedin.com/company/sharkspace/',
    ],
    image: [
      'https://sharkspace.in/images/gallery-1.webp',
      'https://sharkspace.in/images/gallery-2.webp',
      'https://sharkspace.in/images/gallery-3.webp',
    ],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sharkspace.in/#contact',
        actionPlatform: [
          'http://schema.org/DesktopWebPlatform',
          'http://schema.org/MobileWebPlatform',
        ],
      },
      result: {
        '@type': 'Reservation',
        name: 'Book Free Tour',
      },
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sharkspace Coworking',
    url: 'https://sharkspace.in',
    description: 'Best coworking space in Sector 132 Noida Expressway',
    publisher: {
      '@type': 'Organization',
      name: 'Sharkspace Coworking',
      url: 'https://sharkspace.in',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://sharkspace.in/?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://sharkspace.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Coworking Space Noida Expressway',
        item: 'https://sharkspace.in/#pricing',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Where is Sharkspace coworking located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sharkspace is located in Sector 132 on Noida Expressway, just 5 minutes from Sector 142 Metro station.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the coworking prices at Sharkspace Noida?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Day Pass starts at ₹500/day, Dedicated Desk at ₹7,000/month, and Private Cabins at ₹8,000/month.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is 24/7 access available at Sharkspace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Sharkspace offers 24×7 secure access with CCTV surveillance for all members.',
        },
      },
      {
        '@type': 'Question',
        name: 'What amenities are included in Sharkspace coworking?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Amenities include high-speed WiFi, meeting rooms, pantry with tea/coffee, parking, reception services, and secure 24/7 access.',
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>

        
        
        {/* Preload LCP images for faster rendering */}
        
      <link
  rel="preload"
  as="image"
  href="/heropf.webp"
  imageSrcSet="/heropf.webp 768w, /herophone.webp 767w"
  imageSizes="100vw"
  fetchPriority="high"
/>


        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
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
