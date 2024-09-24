/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/blog/2020/05/24/next-js-wp-graphql-static-blog",
        destination: "/post/next-js-wp-graphql-static-blog",
      },
    ];
  },
};

export default nextConfig;
