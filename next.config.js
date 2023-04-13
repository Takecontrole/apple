/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["upload.wikimedia.org", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
}

module.exports = nextConfig
