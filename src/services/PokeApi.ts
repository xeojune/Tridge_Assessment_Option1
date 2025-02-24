import axios from 'axios';

const BASE_URL = 'https://pokeapi.co/api/v2';

// Response Types
export interface PokemonSpecies {
  name: string;
  url: string;
}

export interface SpeciesListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonSpecies[];
}

export interface PokemonVariety {
  is_default: boolean;
  pokemon: {
    name: string;
    url: string;
  };
}

export interface SpeciesDetailResponse {
  name: string;
  varieties: PokemonVariety[];
  flavor_text_entries: Array<{
    flavor_text: string;
    language: {
      name: string;
    };
  }>;
  genera: Array<{
    genus: string;
    language: {
      name: string;
    };
  }>;
  is_legendary: boolean;
  is_mythical: boolean;
  is_baby: boolean;
  habitat: {
    name: string;
    url: string;
  } | null;
  color: {
    name: string;
    url: string;
  };
  shape: {
    name: string;
    url: string;
  };
  growth_rate: {
    name: string;
    url: string;
  };
  capture_rate: number;
  base_happiness: number;
  generation: {
    name: string;
    url: string;
  };
  egg_groups: Array<{
    name: string;
    url: string;
  }>;
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: Array<{
    type: {
      name: string;
    };
  }>;
  abilities: Array<{
    ability: {
      name: string;
    };
    is_hidden: boolean;
  }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
}

// API Client
class PokeApiClient {
  private readonly api;

  constructor() {
    this.api = axios.create({
      baseURL: BASE_URL,
      timeout: 10000,
    });
  }

  // Get list of all Pokemon species
  async getSpeciesList(offset: number = 0, limit: number = 18): Promise<SpeciesListResponse> {
    try {
      const { data } = await this.api.get<SpeciesListResponse>(`/pokemon-species?offset=${offset}&limit=${limit}`);
      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get details of a specific Pokemon species by name
  async getSpeciesDetail(speciesName: string): Promise<SpeciesDetailResponse> {
    try {
      const { data } = await this.api.get<SpeciesDetailResponse>(`/pokemon-species/${speciesName}`);
      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get details of a specific Pokemon species by ID
  async getSpeciesDetailById(speciesId: number): Promise<SpeciesDetailResponse> {
    try {
      const { data } = await this.api.get<SpeciesDetailResponse>(`/pokemon-species/${speciesId}`);
      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Get details of a specific Pokemon
  async getPokemonDetail(pokemonName: string): Promise<PokemonDetailResponse> {
    try {
      const { data } = await this.api.get<PokemonDetailResponse>(`/pokemon/${pokemonName}`);
      return data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  // Error handling
  private handleError(error: unknown): Error {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return new Error('Pokemon or species not found');
      }
      return new Error(error.response?.data?.message || 'An error occurred while fetching data');
    }
    return new Error('An unexpected error occurred');
  }
}

// Export a singleton instance
export const pokeApi = new PokeApiClient();