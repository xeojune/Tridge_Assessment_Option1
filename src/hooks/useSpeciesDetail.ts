import { useState, useEffect } from 'react';
import { pokeApi, SpeciesDetailResponse } from '../services/PokeApi';

export const useSpeciesDetail = (species: string | undefined) => {
  const [data, setData] = useState<SpeciesDetailResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSpeciesDetail = async () => {
    if (!species) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const data = await pokeApi.getSpeciesDetailById(parseInt(species));
      setData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch species details');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSpeciesDetail();
  }, [species]);

  return {
    data,
    loading,
    error,
    refetch: fetchSpeciesDetail
  };
};
