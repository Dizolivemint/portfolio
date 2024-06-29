export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  stack: string[];
  contributor: string;
  url: string;
  year: number;
  demo: string;
}

export type Projects = Project[];