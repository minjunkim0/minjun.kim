import React from 'react';

import { BlogPost as BlogPostType } from 'lib/blog';
import Wrapper from 'components/Wrapper';
import BlogArticle from 'components/BlogArticle';

export type Props = BlogPostType & {
  className?: string;
};

export const BlogPost = ({ title, content, date }: Props) => {
  return (
    <Wrapper>
      <BlogArticle
        title={title}
        content={content}
        date={date}
      />
    </Wrapper>
  );
};

export default BlogPost;
