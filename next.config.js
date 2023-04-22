/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DRESSES_TYPE: process.env.DRESSES_TYPE,
  },
}

module.exports = nextConfig
