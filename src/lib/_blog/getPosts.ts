import { request } from "lib/graphql";
import type { BlogPosts } from "./types";

export type BlogPostsResponse = {
  posts: {
    nodes: BlogPosts[];
  };
};

const query = /* GraphQL */ `
  query GET_POSTS {
    posts {
      nodes {
        id
        title
        excerpt
        slug
        date
      }
    }
  }
`;

export async function getPosts() {
  const data = await request<BlogPostsResponse>(query);
  return data.posts.nodes;
}
