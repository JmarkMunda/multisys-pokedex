import { ViewModeType } from "@/hooks/useNavbarControls";

export type Props = {
  searchValue: string;
  viewMode: ViewModeType;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleViewMode: (mode: ViewModeType) => void;
};
