// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Optional: Configure rewrites for cleaner URLs
  async rewrites() {
    return [
      // Example: /getting-started instead of /docs/getting-started
      {
        source: '/getting-started',
        destination: '/docs/getting-started',
      },
      {
        source: '/user-guide',
        destination: '/docs/user-guide',
      },
      {
        source: '/git-companion',
        destination: '/docs/git-companion',
      },
      {
        source: '/developer-guide',
        destination: '/docs/developer-guide',
      },
      {
        source: '/roadmap',
        destination: '/docs/roadmap',
      },
    ];
  },
};

module.exports = nextConfig;