import React from 'react';

import type { Post } from '@/types/post';
import Wrapper from '@/components/Wrapper';
import BlogArticle from '@/components/BlogArticle';
import BlogAuthor from '@/components/BlogAuthor';

import styles from './BlogPost.module.scss';

export type Props = Post & {
  className?: string;
};

export const BlogPost = ({ title, content, date, author }: Props) => {
  return (
    <Wrapper className={styles.post}>
      <BlogArticle
        title={title}
        content={content}
        date={date}
      />
      {/* <BlogAuthor
        name={author.name}
        description={author.description}
        avatar={author.avatar.url}
      /> */}
    </Wrapper>
  );
};

export default BlogPost;
