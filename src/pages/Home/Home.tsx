import React from 'react';
import { Container, Title, Description, StyledLink } from './Home.style';

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Tridge-PokeDex</Title>
      <Description>
        Welcome to Tridge-PokeDex!
      </Description>
      <StyledLink to="/species">
        Explore Now
      </StyledLink>
    </Container>
  );
};

export default Home;