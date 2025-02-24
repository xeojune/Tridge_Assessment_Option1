import React from 'react';
import { useParams, useNavigate } from 'react-router';
import {
  Container,
  Title,
  LoadingContainer,
  ErrorContainer,
  Grid
} from './PokemonList.style';
import PokeCard from '../../components/PokeCard/PokeCard';
import { usePokemonList } from '../../hooks/usePokemonList';


// Component for PokemonList
const PokemonList: React.FC = () => {
  const { species } = useParams<{ species: string }>();
  const navigate = useNavigate();
  const { pokemonList, loading, error } = usePokemonList(species);

  if (loading) {
    return <LoadingContainer>Loading Pokemon list...</LoadingContainer>;
  }

  if (error) {
    return <ErrorContainer>Error: {error}</ErrorContainer>;
  }

  return (
    <Container>
      <Title>{pokemonList.length} Variations</Title>
      <Grid>
        {pokemonList.map((pokemon) => (
          <PokeCard
            key={pokemon.pokemon.name}
            number={pokemon.number}
            name={pokemon.pokemon.name}
            imageUrl={pokemon.imageUrl}
            onClick={() => navigate(`/species/${species}/pokemons/${pokemon.pokemon.name}`)}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default PokemonList;