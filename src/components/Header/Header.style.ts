// src/components/Header/styles.ts
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #1a1a1a;
  color: white;
`;

export const Logo = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  img {
    height: 24px;
  }
`;
