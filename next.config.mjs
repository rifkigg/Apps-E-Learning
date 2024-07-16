/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
        {
            hostname: 'placehold.co',
        },
        {
            hostname: 'th.bing.com',
        },
    ],
}
};

export default nextConfig;
