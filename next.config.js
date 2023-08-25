/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (isServer) {
            require("./sitemap/generate-sitemap");
        }
        return config;
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;
