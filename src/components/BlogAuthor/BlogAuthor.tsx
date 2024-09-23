import React from "react";

import styles from "./BlogAuthor.module.scss";

export type Props = {
  className?: string;
  avatar?: string;
  name: string;
  description: string;
};

export const BlogAuthor = ({ avatar, name, description }: Props) => {
  return (
    <div className={styles.container}>
      <aside className={styles.author}>
        <span
          role="img"
          className={styles.avatar}
          style={{
            backgroundImage:
              typeof avatar === "string" ? `url(${avatar})` : undefined,
          }}
        />
        <div className={styles.description}>
          <p>
            <strong>{name}</strong>
          </p>
          <p>{description}</p>
        </div>
      </aside>
    </div>
  );
};

export default BlogAuthor;
