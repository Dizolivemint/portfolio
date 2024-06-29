import styled from 'styled-components';
import { Projects } from '../types/project';

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const TechIcon = styled.button<{ isSelected: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.border};
  background-color: ${({ isSelected, theme }) => isSelected ? theme.text : theme.containerBg};
  color: ${({ isSelected, theme }) => isSelected ? theme.containerBg : theme.text};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

interface TechFilterProps {
  projects: Projects;
  selectedStack: string;
  setSelectedStack: (stack: string) => void;
}

export const TechFilter: React.FC<TechFilterProps> = ({ projects, selectedStack, setSelectedStack }) => {
  const allTechs = ['All tech', ...Array.from(new Set(projects.flatMap(project => project.stack)))];

  return (
    <FilterContainer>
      {allTechs.map((tech) => (
        <TechIcon
          key={tech}
          isSelected={selectedStack === tech}
          onClick={() => setSelectedStack(tech)}
        >
          {tech}
        </TechIcon>
      ))}
    </FilterContainer>
  );
};