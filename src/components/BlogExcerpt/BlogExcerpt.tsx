import React from "react";
import cx from "classnames";

import BlogHeader from "../BlogHeader";

import styles from "./BlogExcerpt.module.scss";

export type Props = {
  title: string;
  date: string;
  excerpt?: string;
  url?: string;
  source?: string;
  className?: string;
};

export const BlogExcerpt = ({
  title,
  date,
  excerpt,
  url,
  source,
  className,
}: Props) => {
  return (
    <div className={cx(styles.excerpt, className)}>
      <BlogHeader title={title} date={date} url={url} source={source} />
      {excerpt ? <div dangerouslySetInnerHTML={{ __html: excerpt }} /> : null}
    </div>
  );
};

export default BlogExcerpt;
