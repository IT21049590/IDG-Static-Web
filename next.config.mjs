/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['assets.aceternity.com', 'mysliit-my.sharepoint.com'],
  },
  output: 'export',
  basePath: '/IDG-Static-Web', // Replace with your repository name
  assetPrefix: '/IDG-Static-Web/',
};

export default nextConfig;
