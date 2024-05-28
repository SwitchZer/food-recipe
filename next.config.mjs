/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/v1/:slug*",
        destination: "https://pijar-mama-recipe.vercel.app/v1/:slug*",
      },
    ];
  },
};

export default nextConfig;
