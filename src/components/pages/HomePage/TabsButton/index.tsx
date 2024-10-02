import { Button } from "@/components/ui/Button";
import { Props, TabType } from "./types";
import { capitalize } from "@/lib/utils";

const TabsButton = ({ currentTab, handleTabClick }: Props) => {
  const tabs: TabType[] = ["all", "captured"];

  return (
    <div className="container flex items-center my-4 gap-4">
      {tabs.map((tab) => (
        <Button
          onClick={() => handleTabClick(tab)}
          variant="outline"
          key={tab}
          className={` ${
            currentTab === tab
              ? "bg-yellow-400 hover:bg-yellow-400 font-bold "
              : "bg-gray-100 hover:border-yellow-500"
          }`}>
          {capitalize(tab)}
        </Button>
      ))}
    </div>
  );
};

export default TabsButton;
