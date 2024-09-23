/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['www.gstatic.com'],
    },
    experimental: {
      workerThreads: true,
      cpus: 4,
    },
  };
  
  export default nextConfig;