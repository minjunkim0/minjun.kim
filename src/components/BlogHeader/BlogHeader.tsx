import React, { useMemo } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { defaultBlogPath } from '@/lib/getBlogPath';

import styles from './BlogHeader.module.scss';

export type Props = {
  slug?: string;
  title: string;
  date: string;
  className?: string;
};

export const BlogHeader = ({ title, date, slug }: Props) => {
  const created = useMemo(
    () => moment(date).format('YYYY/MM/DD'),
    [date],
  );
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        {typeof slug !== 'undefined' ? (
          <h1>
            <Link href={defaultBlogPath} as={`/blog/${created}/${slug}`}>
              <a>
                {title}
              </a>
            </Link>
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <div className={styles.info}>
        <span>{created}</span>
      </div>
    </div>
  );
};

export default BlogHeader;
