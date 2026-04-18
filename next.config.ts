import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/work.html', destination: '/', permanent: true },

      { source: '/work/:slug.html', destination: '/work/:slug', permanent: true },

      { source: '/blog.html', destination: '/', permanent: true },
      { source: '/blog/:slug.html', destination: '/', permanent: true },

      { source: '/eric-portfolio', destination: '/', permanent: true },
      { source: '/eric-portfolio/index.html', destination: '/', permanent: true },
      { source: '/eric-portfolio/:slug.html', destination: '/', permanent: true },
    ]
  },
};

export default nextConfig;
