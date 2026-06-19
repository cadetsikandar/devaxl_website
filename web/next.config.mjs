/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Serve the real project screenshots directly from /public (no runtime
  // optimizer / sharp dependency) — fine for a static marketing site.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
