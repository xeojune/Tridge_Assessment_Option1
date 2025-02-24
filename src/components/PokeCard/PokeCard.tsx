import React from 'react';
import { Card, PokemonImage, PokemonNumber, PokemonName } from './PokeCard.style';

// types for PokeCard
interface PokeCardProps {
  number: string;
  name: string;
  imageUrl: string;
  onClick?: () => void;
}

const PokeCard: React.FC<PokeCardProps> = ({ number, name, imageUrl, onClick }) => {
  return (
    <Card onClick={onClick} role="button">
      <PokemonImage src={imageUrl} alt={name} />
      <PokemonNumber>No.{number.padStart(4, '0')}</PokemonNumber>
      <PokemonName>{name}</PokemonName>
    </Card>
  );
};

export default PokeCard;