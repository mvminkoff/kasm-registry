/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Personal KASM Repository',
    description: 'Personal KASM repository.',
    icon: '/img/logo.svg',
    listUrl: 'https://mvminkoff.github.io/kasm-registry/',
    contactUrl: 'https://github.com/mvminkoff/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
