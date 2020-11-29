import React from 'react';

import { BlogPost as BlogPostType } from 'lib/blog';
import Wrapper from 'components/Wrapper';
import BlogArticle from 'components/BlogArticle';
import BlogAuthor from 'components/BlogAuthor';

import styles from './BlogPost.module.scss';

export type Props = BlogPostType & {
  className?: string;
};

export const BlogPost = ({ title, content, date, author: { node: author } }: Props) => {
  return (
    <Wrapper className={styles.post}>
      <BlogArticle
        title={title}
        content={content}
        date={date}
      />
      <BlogAuthor
        name={author.name}
        description={author.description}
        avatar={author.avatar.url}
      />
    </Wrapper>
  );
};

export default BlogPost;
