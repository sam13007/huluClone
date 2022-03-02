/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['www.logo.wine', 'www.vhv.rs', 'image.tmdb.org'],
    },
};

module.exports = nextConfig;