import { ViewModeType } from "@/hooks/useNavbarControls";
import { CapturedPokemonType } from "@/lib/types";

export type Props = {
  data: Partial<CapturedPokemonType>[];
  viewMode: ViewModeType;
  currentPage: number;
};

export type PokemonResult = {
  name: string;
  url: string;
  nickname?: string;
  date?: string;
};
