import styled from 'styled-components';
import { Link } from 'react-router';

export const Container = styled.div`
  min-height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    inset: 0;
    background: url('/images/Background.png') center/cover no-repeat;
    z-index: -1;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: white;
  text-align: center;
  margin-top: 1rem;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: white;
  text-align: center;
  max-width: 600px;
  margin: 1rem 0;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: black;
  text-decoration: none;
  padding: 2rem;
  border-radius: 50%;
  width: 200px;
  height: 200px;
  font-size: 1.4rem;
  text-align: center;
  transition: all 0.3s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  
  &:hover {
    transform: translate(-50%, -70%) scale(1.05);
  }
`;