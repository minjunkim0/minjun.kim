import React from 'react';
import BlogHeader from '../BlogHeader';

import styles from './BlogArticle.module.scss';
import BlogContent from '../BlogContent';

export type Props = {
  className?: string;
  title: string;
  date: string;
  content: string;
};

export const BlogArticle = ({ title, date, content }: Props) => {
  return (
    <article className={styles.article}>
      <BlogHeader
        title={title}
        date={date}
      />
      <BlogContent value={content} className={styles.content} />
    </article>
  );
};

export default BlogArticle;
