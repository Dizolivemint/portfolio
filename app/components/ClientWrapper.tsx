"use client"
import { Projects } from '@/app/types/project';
import { ProjectList } from '@/app/components/ProjectList';
import { TechFilter } from '@/app/components/TechFilter';
import { useState } from 'react';

export default function ClientWrapper({ initialProjects }: { initialProjects: Projects }) {
  const [selectedStack, setSelectedStack] = useState<string>('All tech');

  return (
    <>
      <TechFilter 
        projects={initialProjects} 
        selectedStack={selectedStack} 
        setSelectedStack={setSelectedStack} 
      />
      <ProjectList 
        projects={initialProjects} 
        selectedStack={selectedStack} 
      />
    </>
  );
}