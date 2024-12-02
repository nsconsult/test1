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
};


export default nextConfig;
