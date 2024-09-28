import React, { useState } from "react";

// Types
export type ViewModeType = "list" | "grid";

// Hook
const useNavbarControls = () => {
  const [searchValue, setSearchValue] = useState("");
  const [viewMode, setViewMode] = useState<ViewModeType>("list");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const toggleViewMode = (mode: ViewModeType) => setViewMode(mode);

  return { searchValue, viewMode, handleSearchChange, toggleViewMode };
};

export default useNavbarControls;
