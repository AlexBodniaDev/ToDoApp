/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',

  // Your repository name (important for subpath hosting)
  basePath: '/ToDoApp',
  assetPrefix: '/ToDoApp/',

  // Ensures refresh and deep links work correctly on GitHub Pages
  trailingSlash: true,

  // Disable Next.js image optimization (not supported for static export)
  images: {
    unoptimized: true,
  },

  // Optional: strict mode and React refresh (keeps it modern)
  reactStrictMode: true,
};

export default nextConfig;
