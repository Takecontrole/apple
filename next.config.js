/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true
},
  images: {
    domains: ["upload.wikimedia.org", "cdn.sanity.io", "lh3.googleusercontent.com", "images.unsplash.com", "www.apple.com"],
  },
}

module.exports = nextConfig
