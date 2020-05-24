import React from 'react';

import { BlogPosts } from 'lib/blog/types';
import BlogExcerpt from 'components/BlogExcerpt';
import Wrapper from 'components/Wrapper';

export type Props = {
  posts: BlogPosts[];
  className?: string;
};

export const BlogPost = ({ posts, className }: Props) => {
  return (
    <Wrapper>
      {posts.map(post => (
        <BlogExcerpt
          {...post}
          key={post.id}
        />
      ))}
    </Wrapper>
  );
};

export default BlogPost;
