/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['www.gstatic.com'],
    },
    experimental: {
      workerThreads: true,
      cpus: 4,
    },
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
  };
  
  export default nextConfig;