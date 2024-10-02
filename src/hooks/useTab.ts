import { TabType } from "@/components/pages/HomePage/TabsButton/types";
import { useState } from "react";

const useTab = () => {
  const [currentTab, setCurrentTab] = useState<TabType>("all");

  const handleTabClick = (value: TabType) => setCurrentTab(value);

  return { currentTab, handleTabClick };
};

export default useTab;
