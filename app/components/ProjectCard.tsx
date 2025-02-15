"use client"
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-4 text-black-300 dark:text-white">{project.title}</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{project.description}</p>
      </div>
      
      
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.url && (
            <a 
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-all duration-300 hover:-translate-y-1"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition-all duration-300 hover:-translate-y-1"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};