import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import getBlogPath from 'lib/getBlogPath';
import Layout from 'containers/Layout';
import BlogPost from 'containers/BlogPost';
import { getSlugPaths, getPost } from 'lib/blog';
import type { BlogPost as BlogPostType } from 'lib/blog';

export type Props = {
  post: BlogPostType;
};

const BlogPostPage = ({ post }: Props) => {
  if (typeof post === 'undefined') {
    return null;
  }

  const { as: canonical } = getBlogPath({ date: post.date, slug: post.slug });
  return (
    <Layout>
      {typeof post !== 'undefined' ? (
        <Head>
          <title>{post.title}</title>
          <link rel="canonical" href={`https://minjun.kim${canonical}`} />
          <meta property="og:type" content="article" />
        </Head>
      ) : null}
      <BlogPost {...post} />
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
    props: {
      post,
    },
    unstable_revalidate: true,
  };
};

export default BlogPostPage;
