import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve('./src');
        return config;
    },
    eslint: {
        ignoreDuringBuilds: true, // Ignore les erreurs ESLint pendant le build
    },
    env: {
        ROOT_PATH: process.env.ROOT_PATH || '/', // Définir ROOT_PATH avec une valeur par défaut
    },
};

export default nextConfig;
