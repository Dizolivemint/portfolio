import { getProducts } from '@/apollo/client';
import ClientWrapper from '@/app/components/ClientWrapper';
import { Header } from '@/app/components/Header';

export const dynamic = 'force-static';

export default async function Page() {
  const projects = await getProducts();
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <Header />
      <ClientWrapper initialProjects={sortedProjects} />
    </div>
  );
}