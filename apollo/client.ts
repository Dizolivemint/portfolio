'use server'
import { Projects } from '@/app/types/project';

export async function getProducts(): Promise<Projects> {
  if (!process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT) {
    throw new Error('NEXT_PUBLIC_GRAPHCMS_ENDPOINT is not defined');
  }
  const response = await fetch(process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
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
        }
      `
    }),
  });

  const json = await response.json();
  return json.data.projects;
}