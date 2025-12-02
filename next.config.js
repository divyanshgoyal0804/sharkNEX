/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development best practices
  reactStrictMode: true,

  // Clean URLs without trailing slashes
  trailingSlash: false,

  // Image optimization configuration
  images: {
    formats: ['image/avif', 'image/webp'],
    // Add external image domains here if needed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },

  // Vercel deployment optimization
  output: 'standalone',

  // Experimental features for App Router (if needed)
  experimental: {
    // Enable optimizations as needed
  },

  // Headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
