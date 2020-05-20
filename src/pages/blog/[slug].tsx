import React from 'react';

import Layout from 'containers/Layout';
import BlogPost from 'containers/BlogPost';
import { getSlugPaths, getPost } from 'lib/blog';
import type { BlogPost as BlogPostProps } from 'lib/blog';
import { GetStaticProps, GetStaticPaths } from 'next';

const BlogPostPage = ({ id, title, content }: BlogPostProps) => {
  return (
    <Layout>
      <BlogPost
        title={title}
        content={content}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getSlugPaths('/blog');
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getPost({ slug: params.slug });
  return {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    props: post || {},
    // unstable_revalidate: true,
  };
};

export default BlogPostPage;
