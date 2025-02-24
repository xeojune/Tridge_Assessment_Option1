import { useState, useEffect } from 'react';
import { pokeApi, PokemonVariety } from '../services/PokeApi';

interface Pokemon extends PokemonVariety {
  number: string;
  imageUrl: string;
}

export const usePokemonList = (species: string | undefined) => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      if (!species) return;

      try {
        const speciesData = await pokeApi.getSpeciesDetail(species);
        const detailedPokemons = await Promise.all(
          speciesData.varieties.map(async (variety) => {
            const details = await pokeApi.getPokemonDetail(variety.pokemon.name);
            return {
              ...variety,
              number: details.id.toString(),
              imageUrl: details.sprites.other['official-artwork'].front_default || details.sprites.front_default || ''
            };
          })
        );

        setPokemonList(detailedPokemons);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch Pokemon list');
        setLoading(false);
      }
    };

    fetchPokemonDetails();
  }, [species]);

  return { pokemonList, loading, error };
};
