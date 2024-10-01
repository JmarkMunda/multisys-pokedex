import { getLocalStorage, setLocalStorage } from "@/lib/utils";
import React, { useState } from "react";

// Types
export type ViewModeType = "list" | "grid";

// Hook
const useNavbarControls = () => {
  const [searchValue, setSearchValue] = useState("");
  const [viewMode, setViewMode] = useState<ViewModeType>(
    getLocalStorage("viewMode") ?? "grid"
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const toggleViewMode = (mode: ViewModeType) => {
    setViewMode(mode);
    setLocalStorage("viewMode", mode);
  };

  return { searchValue, viewMode, handleSearchChange, toggleViewMode };
};

export default useNavbarControls;
