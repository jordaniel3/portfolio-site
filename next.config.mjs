/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 's4.anilist.co',
              port: '',
              pathname: '/file/**',
            },
          ],
        },
        async headers() {
          return [
            {
              // Routes this applies to
              source: "/(.*)",
              // Headers
              headers: [
                // Allow for specific domains to have access or * for all
                {
                  key: "Access-Control-Allow-Origin",
                  value: "*",
                },
              ],
            },
          ];
        },
        
    
        
      
};

export default nextConfig;
