import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { pokeApi, PokemonDetailResponse } from '../../services/PokeApi';
import { 
  Container, 
  PokemonImage, 
  TypesContainer, 
  TypeBadge, 
  AbilitiesList, 
  AbilityItem, 
  StatContainer, 
  StatName, 
  StatBar, 
  StatBarFill,
  LoadingContainer,
  ErrorContainer
} from './PokemonDetail.style';

// 코드 가시성을 위해 여러 컴포넌트로 만들기

// Component for StatusMessage
const StatusMessage: React.FC<{ loading: boolean; error: string | null }> = ({ loading, error }) => {
  if (loading) return <LoadingContainer>Loading pokemon details...</LoadingContainer>;
  if (error) return <ErrorContainer>{error}</ErrorContainer>;
  return null;
};

// Component for PokemonStats
const PokemonStats: React.FC<{ stats: PokemonDetailResponse['stats'] }> = ({ stats }) => (
  <>
    <h2>Base Stats</h2>
    {stats.map(({ base_stat, stat }) => (
      <StatContainer key={stat.name}>
        <StatName>{stat.name}</StatName>
        <StatBar>
          <StatBarFill width={(base_stat / 255) * 100} />
        </StatBar>
      </StatContainer>
    ))}
  </>
);

// Component for PokemonAbilities
const PokemonAbilities: React.FC<{ abilities: PokemonDetailResponse['abilities'] }> = ({ abilities }) => (
  <>
    <h2>Abilities</h2>
    <AbilitiesList>
      {abilities.map(({ ability, is_hidden }) => (
        <AbilityItem key={ability.name}>
          {ability.name} {is_hidden && '(Hidden)'}
        </AbilityItem>
      ))}
    </AbilitiesList>
  </>
);

// Component for PokemonDetail
const PokemonDetail: React.FC = () => {
  const { pokemon } = useParams<{ species: string; pokemon: string }>();
  const [pokemonData, setPokemonData] = useState<PokemonDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetail = async () => {
      if (!pokemon) return;

      try {
        const data = await pokeApi.getPokemonDetail(pokemon);
        setPokemonData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Pokemon details');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonDetail();
  }, [pokemon]);

  return (
    <Container>
      <StatusMessage loading={loading} error={error} />
      
      {pokemonData && (
        <>
          <PokemonImage 
            src={pokemonData.sprites.other?.['official-artwork'].front_default ?? pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          
          <TypesContainer>
            {pokemonData.types.map(({ type }) => (
              <TypeBadge key={type.name} type={type.name}>
                {type.name}
              </TypeBadge>
            ))}
          </TypesContainer>

          <PokemonAbilities abilities={pokemonData.abilities} />
          <PokemonStats stats={pokemonData.stats} />
        </>
      )}
    </Container>
  );
};

export default PokemonDetail;