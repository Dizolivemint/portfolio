import styled from 'styled-components';
import { Project } from '../types/project';

const Card = styled.div`
  background-color: ${({ theme }) => theme.containerBg};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
`;

const Description = styled.p`
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.containerBg};
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.containerBg};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  a {
    color: ${({ theme }) => theme.containerBg};
    text-decoration: none;
  }
`;

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <Title>{project.title}</Title>
      <Description>{project.description}</Description>
      <TechStack>
        {project.stack.map((tech, index) => (
          <TechTag key={index}>{tech}</TechTag>
        ))}
      </TechStack>
      <Links>
        {project.url && (
        <Button>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </Button>
        )}
        {project.demo && (
        <Button>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        </Button>
        )}
      </Links>
    </Card>
  );
};