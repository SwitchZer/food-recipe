/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/v1/:slug*",
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/:slug*`,
      },
    ];
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "www.unileverfoodsolutions.co.id",
      "asset-2.tstatic.net",
    ],
  },
};

export default nextConfig;
