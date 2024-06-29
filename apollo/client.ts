'use server'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { Projects } from '@/app/types/project';

if (!process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT) {
  throw new Error('NEXT_PUBLIC_GRAPHCMS_ENDPOINT is not defined');
}

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT,
  cache: new InMemoryCache()
});

const GET_PROJECTS = gql`
query Assets {
  projects {
    id
    slug
    title
    description
    stack
    contributor
    url
    year
    demo
  }
}`

export async function getProducts(): Promise<Projects> {
  const response = await client.query<{ projects: Projects }>({
    query: GET_PROJECTS,
  });
  return response.data.projects;
}