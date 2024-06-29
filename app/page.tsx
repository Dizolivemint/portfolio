"use client"

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getProducts } from '@/apollo/client';
import { ProjectList } from '@/app/components/ProjectList';
import { TechFilter } from '@/app/components/TechFilter';
import { ProfilePhoto } from '@/app/components/ProfilePhoto';
import { Projects } from '@/app/types/project';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Page = () => {
  const [projects, setProjects] = useState<Projects>([]);
  const [selectedStack, setSelectedStack] = useState<string>('All tech');

  useEffect(() => {
    async function loadData() {
      const fetchedProjects = await getProducts();
      fetchedProjects.sort((a, b) => b.year - a.year);
      setProjects(fetchedProjects);
    }

    loadData();
  }, []);

  return (
    <PageContainer>
      <ProfilePhoto />
      <TechFilter projects={projects} selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
      <ProjectList projects={projects} selectedStack={selectedStack} />
    </PageContainer>
  );
};

export default Page;