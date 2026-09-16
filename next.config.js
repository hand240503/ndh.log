const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isProd ? "/ndh.log" : "",
  assetPrefix: isProd ? "/ndh.log" : "",
  images: {
    unoptimized: true, // GitHub Pages khÃ´ng cÃ³ Image Optimization server
  },
  trailingSlash: true, // giÃºp route tÄ©nh resolve Ä‘Ãºng trÃªn GitHub Pages
};

module.exports = nextConfig;
