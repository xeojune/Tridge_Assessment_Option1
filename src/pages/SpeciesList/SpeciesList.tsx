import React from 'react';
import { Link } from 'react-router';
import { pokeApi, PokemonSpecies } from '../../services/PokeApi';
import PokeCard from '../../components/PokeCard/PokeCard';
import { Container, ErrorContainer, Grid, LoadingContainer, Title } from './SpeciesList.style';
import { useInfiniteScroll } from '../../hooks/useInfiniteScroll';

// Response Types for SpeciesList
interface SpeciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSpecies[];
}

// Component for SpeciesList
const SpeciesList: React.FC = () => {
  // Fetch species list from API
  const fetchSpecies = async (page: number) => {
    const offset = page * 18;
    const data: SpeciesResponse = await pokeApi.getSpeciesList(offset);
    return {
      items: data.results,
      hasMore: data.next !== null,
    };
  };

  // Use useInfiniteScroll hook to fetch species list
  const { data: species, loading, error, lastElementRef } = useInfiniteScroll({
    fetchData: fetchSpecies,
    initialPage: 0,
  });

  if (error) {
    return <ErrorContainer>Error: {error}</ErrorContainer>;
  }

  return (
    <Container>
      <Title>Pokemon Species</Title>
      <Grid>
        {species.map((speciesItem, index) => {
          const number = speciesItem.url.split('/').filter(Boolean).pop() || '';
          const isLastElement = species.length === index + 1;
          
          return (
            // Ensure no duplicate refs are attached
            <div 
              ref={isLastElement ? lastElementRef : null} 
              //key 중복성을 없애기 위해 URL 과 index를 혼합해 사용
              key={`${speciesItem.url}-${index}`}
            >
              <Link 
                to={`/species/${number}`}
                style={{ textDecoration: 'none' }}
              >
                <PokeCard
                  number={number}
                  name={speciesItem.name}
                  imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`}
                />
              </Link>
            </div>
          );
        })}
      </Grid>
      {loading && <LoadingContainer>Loading...</LoadingContainer>}
    </Container>
  );
};

export default SpeciesList;