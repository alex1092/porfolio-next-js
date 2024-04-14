/** @type {import('next').NextConfig} */
const nextConfig = {  
  swcMinify: true,

  transpilePackages: ["@0xsquid/widget", "@0xsquid/staking-widget"],

    reactStrictMode: true,
    images: {
      domains: ['images.unsplash.com'],
    },
};

export default nextConfig;
