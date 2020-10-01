import moment from 'moment';
import { request } from 'lib/graphql';
import type { BlogSlugs } from './types';

type SlugResponse = {
  posts: {
    nodes: BlogSlugs[];
  };
};

const query = /* GraphQL */ `
  query GET_SLUGS {
    posts {
      nodes {
        slug
        date
      }
    }
  }
`;

export async function getSlugPaths(prefix: string) {
  const data = await request<SlugResponse>(query, {});
  return data.posts.nodes.map((post) => `${prefix}/${moment(post.date).format('YYYY/MM/DD')}/${post.slug}`);
}
