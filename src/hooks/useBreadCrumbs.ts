import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { pokeApi } from '../services/PokeApi';

interface BreadcrumbItem {
  label: string;
  path: string;
  isActive: boolean;
}

export const useBreadcrumbs = () => {
  const location = useLocation();
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([
    { label: 'Home', path: '/', isActive: true }
  ]);
  const [speciesName, setSpeciesName] = useState('');
  const [pokemonName, setPokemonName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const generateBreadcrumbs = async () => {
      const path = location.pathname;
      const pathSegments = path.split('/').filter(Boolean);
      const newItems: BreadcrumbItem[] = [];
      let currentPath = '';

      setIsLoading(true);
      try {
        // Always start with Home
        newItems.push({
          label: 'Home',
          path: '/',
          isActive: path === '/'
        });

        for (let i = 0; i < pathSegments.length; i++) {
          const segment = pathSegments[i];
          currentPath += `/${segment}`;

          if (segment === 'species') {
            if (i === 0) {
              newItems.push({
                label: 'Pokemon Species List',
                path: '/species',
                isActive: currentPath === path
              });
            }
          } else if (i === 1 && pathSegments[0] === 'species') {
            if (!speciesName || speciesName !== segment) {
              try {
                const speciesData = await pokeApi.getSpeciesDetail(segment);
                const capitalizedName = speciesData.name.charAt(0).toUpperCase() + speciesData.name.slice(1);
                setSpeciesName(capitalizedName);
              } catch (error) {
                console.error('Error fetching species name:', error);
              }
            }
            newItems.push({
              label: `${speciesName} Overview`,
              path: currentPath,
              isActive: currentPath === path
            });
          } else if (segment === 'pokemons') {
            newItems.push({
              label: 'Pokemon List',
              path: currentPath,
              isActive: currentPath === path
            });
          } else if (i === 3 && pathSegments[2] === 'pokemons') {
            if (!pokemonName || pokemonName !== segment) {
              try {
                const pokemonData = await pokeApi.getPokemonDetail(segment);
                const capitalizedName = pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1);
                setPokemonName(capitalizedName);
              } catch (error) {
                console.error('Error fetching pokemon name:', error);
              }
            }
            newItems.push({
              label: pokemonName,
              path: currentPath,
              isActive: currentPath === path
            });
          }
        }
      } catch (error) {
        console.error('Error generating breadcrumbs:', error);
      } finally {
        setIsLoading(false);
      }

      setBreadcrumbItems(newItems);
    };

    generateBreadcrumbs();
  }, [location, speciesName, pokemonName]);

  return { items: breadcrumbItems, isLoading };
};