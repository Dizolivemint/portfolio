import styled from 'styled-components';

const PhotoContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 2rem;
  border: 4px solid ${({ theme }) => theme.border};
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProfilePhoto = () => {
  return (
    <PhotoContainer>
      <Photo src="/avatar.png" alt="Your Name" />
    </PhotoContainer>
  );
};