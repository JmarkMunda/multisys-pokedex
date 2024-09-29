export type PokemonDetailsType = {
  image: string;
  name: string;
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
};
