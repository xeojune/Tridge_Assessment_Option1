// src/styles/theme.ts
export const theme = {
    colors: {
      primary: '#0d6efd',
      secondary: '#6c757d',
      background: '#f8f9fa',
      text: '#212529',
      pokemonTypes: {
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
      }
    },
    spacing: {
      small: '8px',
      medium: '16px',
      large: '24px'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '20px'
    }
  };
  
  export type Theme = typeof theme;