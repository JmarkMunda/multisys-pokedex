export type Props = {
  data: PokemonResult[];
  currentPage: number;
};

export type PokemonResult = {
  name: string;
  url: string;
};
