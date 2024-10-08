export type PokemonsResponseType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Partial<CapturedPokemonType>[];
};

export type PokemonDetailsType = {
  id: string;
  image: string;
  name: string;
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
  base_experience?: string;
  weight?: string;
  height: string;
  stats?: {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
  }[];
  sprites?: {
    other: {
      home: { front_default: string };
    };
  };
};

export type CapturedPokemonType = {
  id: string;
  nickname: string;
  date: string;
  name?: string;
  url?: string;
};
