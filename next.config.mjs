/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/blog/2020/05/24/next-js-wp-graphql-static-blog",
        destination: "/posts/next-js-wp-graphql-static-blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
