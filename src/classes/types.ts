export type PokemonStat = {
  base_stat: number;
  stat: string;
};

export type PokeType = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  legendary: boolean;
  firstAppearance: string;
  abilities: string[];
  stats: PokemonStat[];
};

export type FilmesType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type PaisType = {
  name: { common: string; official: string };
  independent: boolean;
  unMember: boolean;
  capital: string;
  region: string;
  subregion: string;
  languages: string[];
  latlng: number[];
  borders: string[];
  area: number;
  population: number;
  timezones: string[];
  flags: { png: string; svg: string };
};
