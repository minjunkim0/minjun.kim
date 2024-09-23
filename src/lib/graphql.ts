import { GraphQLClient } from "graphql-request";

export type Variables = {
  [key: string]: any;
};

// Wordpress Endpoint
const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

// eslint-disable-next-line @typescript-eslint/promise-function-async
export function request<T = any>(query: string, variables?: Variables) {
  const graphQLClient = new GraphQLClient(endpoint, {
    credentials: "include",
    mode: "cors",
  });

  return graphQLClient.request<T>(query, variables);
}
