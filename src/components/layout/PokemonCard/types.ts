import { ViewModeType } from "@/hooks/useNavbarControls";

export type Props = {
  name: string;
  url: string;
  viewMode: ViewModeType;
  currentPage: number;
  index?: number;
};
