/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.magicprice.ro",
        pathname: "/catalog/**",
      },
    ],
  },
};

export default nextConfig;
