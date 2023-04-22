/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    basePATH: process.env.basePATH,
    DRESSES_TYPE: process.env.DRESSES_TYPE,
  },
}

module.exports = nextConfig
