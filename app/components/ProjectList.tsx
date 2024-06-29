import styled from 'styled-components';
import { ProjectCard } from '@/app/components/ProjectCard';
import { Projects } from '@/app/types/project';

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

interface ProjectListProps {
  projects: Projects;
  selectedStack: string;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, selectedStack }) => {
  const filteredProjects = selectedStack === 'All tech'
    ? projects
    : projects.filter(project => project.stack.includes(selectedStack));

  return (
    <ProjectGrid>
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ProjectGrid>
  );
};