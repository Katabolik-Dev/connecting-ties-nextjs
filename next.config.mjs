/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'onedrive.live.com',
            }
        ]
    }
};

export default nextConfig;
