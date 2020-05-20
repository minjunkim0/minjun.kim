import { request } from 'lib/graphql';
import type { BlogPost } from './types';

export type BlogPostResponse = {
  post: BlogPost;
};

export async function getPost ({ slug }) {
  const query = /* GraphQL */ `
    query GET_POST($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        content
      }
    }
  `;

  const { post } = await request<BlogPostResponse>(query, { slug });
  return post;
}
