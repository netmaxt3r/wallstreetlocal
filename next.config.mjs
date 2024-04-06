/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    NEXT_PUBLIC_SERVER: "https://content.wallstreetlocal.com",
  }
};

export default nextConfig;
