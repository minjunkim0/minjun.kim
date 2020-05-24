import React from 'react';
import { GetStaticProps } from 'next';

import Layout from 'containers/Layout';
import BlogPosts from 'containers/BlogPosts';
import { getPosts } from 'lib/blog';
import type { BlogPost as BlogPostProps } from 'lib/blog';

export type Props = {
  posts: BlogPostProps[];
};

const BlogPostsPage = ({ posts }: Props) => {
  return (
    <Layout>
      <BlogPosts
        posts={posts}
      />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await getPosts();
  return {
    props: {
      posts,
    },
    unstable_revalidate: true,
  };
};

export default BlogPostsPage;
