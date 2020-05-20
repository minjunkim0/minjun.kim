import React from 'react';
import cx from 'classnames';

import Wrapper from 'components/Wrapper';
import WPContent from 'components/WPContent';

import styles from './BlogPost.module.scss';

export type Props = {
  title: string;
  content: string;
  className?: string;
};

export const BlogPost = ({ title, content, className }: Props) => {
  return (
    <div className={cx(styles.container, className)}>
      <Wrapper>
        <article className={styles.article}>
          <h1 className={styles.title}>{title}</h1>
          <WPContent value={content} />
        </article>
      </Wrapper>
    </div>
  );
};

export default BlogPost;
