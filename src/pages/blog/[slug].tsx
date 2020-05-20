import React from 'react';

import Layout from 'containers/Layout';
import BlogPost from 'containers/BlogPost';
import { getSlugPaths, getPost } from 'lib/blog';
import type { BlogPost as BlogPostProps } from 'lib/blog';

const BlogPostPage = ({ title, content }: BlogPostProps) => {
  return (
    <Layout>
      <BlogPost
        title={title}
        content={content}
      />
    </Layout>
  );
};

export async function getStaticPaths () {
  const paths = await getSlugPaths('/blog');
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps ({ params }) {
  const post = await getPost({ slug: params.slug });
  return {
    props: post,
  };
}

export default BlogPostPage;
