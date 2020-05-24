import React from 'react';
import cx from 'classnames';

import BlogHeader from '../BlogHeader';

import styles from './BlogExcerpt.module.scss';

export type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  className?: string;
};

export const BlogExcerpt = ({ title, date, excerpt, slug, className }: Props) => {
  return (
    <div className={cx(styles.excerpt, className)}>
      <BlogHeader
        title={title}
        date={date}
        slug={slug}
      />
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
    </div>
  );
};

export default BlogExcerpt;
