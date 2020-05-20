import { request } from 'lib/graphql';
import type { BlogPost } from './types';

type SlugResponse = {
  posts: {
    edges: Array<{
      node: BlogPost;
    }>;
  };
};

export async function getSlugPaths (prefix: string) {
  const query = /* GraphQL */ `
    query GET_POSTS {
      posts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `;

  const data = await request<SlugResponse>(query, {});
  return data.posts.edges.map((post) => `${prefix}/${post.node.slug}`);
}
