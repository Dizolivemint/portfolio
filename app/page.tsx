import { getProducts } from '@/apollo/client';
import ClientWrapper from '@/app/components/ClientWrapper';
import { Header } from '@/app/components/Header';
import Link from 'next/link';

export const dynamic = 'force-static';

export default async function Page() {
  const projects = await getProducts();
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <Header />
      <div className="mb-8 text-black dark:text-white text-center">
        <h1 className='text-xl mb-8'>👋, I'm Miles!</h1>
        <p>
          Below are some fullstack projects that I've worked on over the years. You can filter them by tech stack. However, much of my work is private. Please <Link href="https://www.linkedin.com/in/milesexner/">visit my LinkedIn profile</Link> for other projects.
        </p>
      </div>
      <ClientWrapper initialProjects={sortedProjects} />
    </div>
  );
}