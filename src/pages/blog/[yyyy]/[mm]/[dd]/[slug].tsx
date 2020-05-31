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
  const postCanonical = `https://minjun.kim${canonical}`;
  const postExcerpt = post.excerpt.replace(/(<([^>]+)>)|\n|\[&hellip;\]/ig, '');
  return (
    <Layout>
      {typeof post !== 'undefined' ? (
        <Head>
          <title>{post.title}</title>
          <link rel="canonical" href={postCanonical} />
          <meta property="og:type" content="article" />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:site_name" content="minjun.kim" />
          <meta property="og:url" content={postCanonical} />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={postExcerpt} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={postCanonical} />
          <meta name="twitter:title" content={post.title} />
          <meta name="twitter:description" content={postExcerpt} />
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
