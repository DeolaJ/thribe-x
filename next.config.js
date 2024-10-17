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
        domains: ["res.cloudinary.com", "flagcdn.com", "upload.wikimedia.org"],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

module.exports = nextConfig;
