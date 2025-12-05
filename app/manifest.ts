import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sharkspace Coworking - Premium Shared Office Space Sector 132 Noida Expressway',
    short_name: 'Sharkspace',
    description:
      'Premium coworking space on Noida Expressway Sector 132. Hot desks, dedicated desks, private cabins & managed offices. 24/7 access, high-speed WiFi, meeting rooms. Book your free tour today!',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDF8F3',
    theme_color: '#0F2A4A',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-IN',
    categories: ['business', 'productivity', 'office'],
    icons: [
      {
        src: '/logo.webp',
        sizes: '240x72',
        type: 'image/webp',
        purpose: 'any',
      },
      {
        src: '/logo1.webp',
        sizes: '150x50',
        type: 'image/webp',
        purpose: 'maskable',
      },
    ],
  };
}
