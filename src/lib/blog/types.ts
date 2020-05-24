export type BlogPost = Readonly<{
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
}>;

export type BlogPosts = Omit<BlogPost, 'content'>;

export type BlogSlugs = Pick<BlogPost, 'slug' | 'date'>;
