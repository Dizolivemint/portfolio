"use client"
import { ProjectCard } from './ProjectCard';
import { Projects } from '@/app/types/project';

interface ProjectListProps {
  projects: Projects;
  selectedStack: string;
}

export const ProjectList: React.FC<ProjectListProps> = ({ projects, selectedStack }) => {
  const filteredProjects = selectedStack === 'All tech'
    ? projects
    : projects.filter(project => project.stack.includes(selectedStack));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};