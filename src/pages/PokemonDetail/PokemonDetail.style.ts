// src/pages/PokemonDetail/PokemonDetail.style.ts
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: #666;
`;

export const ErrorContainer = styled.div`
  color: #dc3545;
  padding: 16px;
  border-radius: 4px;
  background-color: #f8d7da;
  margin-bottom: 16px;
`;

export const PokemonImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  margin: 20px auto;
  display: block;
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;

export const TypeBadge = styled.span<{ type: string }>`
  padding: 5px 15px;
  border-radius: 20px;
  color: white;
  text-transform: capitalize;
  background-color: ${({ type }) => getTypeColor(type)};
`;

export const StatContainer = styled.div`
  margin-bottom: 15px;
`;

export const StatName = styled.div`
  text-transform: capitalize;
  margin-bottom: 5px;
  color: #666;
`;

export const StatBar = styled.div`
  height: 10px;
  background-color: #e9ecef;
  border-radius: 5px;
  overflow: hidden;
`;

export const StatBarFill = styled.div<{ width: number }>`
  height: 100%;
  width: ${({ width }) => width}%;
  background-color: #0d6efd;
  transition: width 0.3s ease;
`;

export const AbilitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

export const AbilityItem = styled.li`
  margin-bottom: 8px;
  text-transform: capitalize;
  color: #333;
`;

// Helper function for type colors
const getTypeColor = (type: string) => {
  const colors: { [key: string]: string } = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
  };
  return colors[type] || '#777';
};