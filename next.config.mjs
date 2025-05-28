/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test.fynely.com',
        pathname: '/catalog/**',
      },
    ],
  },
};

export default nextConfig;
