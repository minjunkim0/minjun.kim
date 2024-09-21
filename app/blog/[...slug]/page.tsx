import BlogPost from "@/containers/BlogPost";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string[];
  };
};

export default function ArticlePage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  console.log(post);
  // if (post) {
  //   return <BlogPost {...post} />;
  // }


  // return <BlogPost />;
  return null;
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug.join('/'));

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | minjun.kim`;

  return {
    title,
    openGraph: {
      title,
      // images: [post.ogImage.url],
    },
  };
}

export  function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
