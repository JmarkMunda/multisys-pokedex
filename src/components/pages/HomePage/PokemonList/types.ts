import { ViewModeType } from "@/hooks/useNavbarControls";

export type Props = {
  data: PokemonResult[];
  viewMode: ViewModeType;
  currentPage: number;
};

export type PokemonResult = {
  name: string;
  url: string;
};
