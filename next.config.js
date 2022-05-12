/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  async rewrites() {
    // return {
    //   // After checking all Next.js pages (including dynamic routes)
    //   // and static files we proxy any other requests
    //   // fallback: [
    //   //   {
    //   //     source: "/api/:auth*",
    //   //     destination: `http://localhost:5000/api/v1/:auth*`,
    //   //   },
    //   // ],
    // };

    // For versions of Next.js < v10.1 you can use a no-op rewrite instead
    return [
      // we need to define a no-op rewrite to trigger checking
      // all pages/static files before we attempt proxying

      {
        source: "/api/:path*",
        destination: `http://localhost:5000/api/v1/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
