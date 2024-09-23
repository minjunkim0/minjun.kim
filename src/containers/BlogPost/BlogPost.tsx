import React from "react";

import type { Post } from "@/lib/blog/types";
import Wrapper from "@/components/Wrapper";
import BlogArticle from "@/components/BlogArticle";

import styles from "./BlogPost.module.scss";

type Props = Post & {
  className?: string;
};

const BlogPost = ({ title, content, date }: Props) => {
  return (
    <Wrapper className={styles.post}>
      <BlogArticle title={title} content={content} date={date} />
      {/* <BlogAuthor
        name={author.name}
        description={author.description}
        avatar={author.avatar.url}
      /> */}
    </Wrapper>
  );
};

export default BlogPost;
