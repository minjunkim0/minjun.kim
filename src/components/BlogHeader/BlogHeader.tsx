import React, { useMemo } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { defaultBlogPath } from '@/lib/getBlogPath';

import styles from './BlogHeader.module.scss';

export type Props = {
  url?: string;
  title: string;
  date: string;
  className?: string;
  source?: string;
};

export const BlogHeader = ({ title, date, url, source }: Props) => {
  const created = useMemo(
    () => moment(date).format('YYYY/MM/DD'),
    [date],
  );
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        {url ? (
          <h1>
            <Link href={url}>
                {title}
            </Link>
          </h1>
        ) : (
          <h1>{title}</h1>
        )}
      </div>
      <div className={styles.info}>
        <span>{created}</span>
        {source ? <> • <span>{source}</span></> : null}
      </div>
    </div>
  );
};

export default BlogHeader;
