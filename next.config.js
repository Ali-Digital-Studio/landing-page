/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.cache = {
      type: "memory",
    };

    return config;
  },
  env: {
    FORMSPREE_KEY: process.env.FORMSPREE_KEY,
  },
};

module.exports = nextConfig;
