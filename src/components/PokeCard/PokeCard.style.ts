// src/components/PokeCard/styles.ts
import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
`;

export const PokemonImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

export const PokemonNumber = styled.div`
  color: #666;
  font-size: 14px;
`;

export const PokemonName = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
`;