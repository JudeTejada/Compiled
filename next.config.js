/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    appDir: true
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'www.vechaiui.com',
      'images.squarespace-cdn.com',
      'res.cloudinary.com'
    ]
  }
};
