export type Props = {
  currentTab: TabType;
  handleTabClick: (value: TabType) => void;
};

export type TabType = "all" | "captured";
