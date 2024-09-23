import { request } from "lib/graphql";
import type { BlogPost } from "./types";

export type BlogPostResponse = {
  post: BlogPost;
};

const query = /* GraphQL */ `
  query GET_POST($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      excerpt
      slug
      date
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
    }
  }
`;

export async function getPost({ slug }) {
  const { post } = await request<BlogPostResponse>(query, { slug });
  return post;
}
