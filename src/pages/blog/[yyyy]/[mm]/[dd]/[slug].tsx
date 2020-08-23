import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import Head from 'next/head';

import getBlogPath from 'lib/getBlogPath';
import getCanonical from 'lib/getCanonical';
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
  const postExcerpt = post.excerpt.replace(/(<([^>]+)>)|\n|\[&hellip;\]/ig, '');
  const postCanonical = getCanonical(canonical);
  return (
    <Layout>
      {typeof post !== 'undefined' ? (
        <Head>
          <title>{post.title}</title>
          <link rel="canonical" href={postCanonical} key="canonical" />
          <meta property="og:type" content="article" key="og-type" />
          <meta property="og:url" content={postCanonical} key="og-url" />
          <meta property="og:title" content={post.title} key="og-title" />
          <meta property="og:description" content={postExcerpt} key="og-description" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={postCanonical} key="twitter-url" />
          <meta name="twitter:title" content={post.title} key="twitter-title" />
          <meta name="twitter:description" content={postExcerpt} key="twitter-description" />
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
    revalidate: true,
  };
};

export default BlogPostPage;
