"use client"
import { Projects } from '../types/project';

interface TechFilterProps {
  projects: Projects;
  selectedStack: string;
  setSelectedStack: (stack: string) => void;
}

export const TechFilter: React.FC<TechFilterProps> = ({ projects, selectedStack, setSelectedStack }) => {
  const allTechs = ['All tech', ...Array.from(new Set(projects.flatMap(project => project.stack)))];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {allTechs.map((tech) => (
        <button
          key={tech}
          onClick={() => setSelectedStack(tech)}
          className={`px-4 py-2 rounded-full border-2 transition-all duration-300 hover:-translate-y-1
            ${selectedStack === tech 
              ? 'bg-blue-500 text-white border-blue-500' 
              : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600'
            }`}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};