import iconLogo from "@/assets/logo.png";
import textLogo from "@/assets/pokedex-logo.png";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { IoGrid, IoSearchOutline } from "react-icons/io5";
import { FaListUl } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Props } from "./types";

const Navbar = ({
  searchValue,
  viewMode,
  handleSearchChange,
  toggleViewMode,
}: Props) => {
  return (
    <nav className="bg-red-400">
      {/* Logo */}
      <div className="container flex items-center justify-between gap-4">
        <img
          src={iconLogo}
          alt="logo"
          className="block sm:hidden w-10 h-10 object-contain"
        />
        <img
          src={textLogo}
          alt="logo"
          className="hidden sm:block w-32 h-10 object-contain mb-4 sm:mb-0 m-auto sm:m-0"
        />

        {/* Controls (Search & Toggle ) */}
        <div className="flex flex-1 sm:flex-none items-center gap-2">
          <div className="flex flex-1 items-center">
            <Input
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Search"
              startIcon={IoSearchOutline}
            />
          </div>
          <div className="flex gap-1">
            <Button
              variant="ghost"
              onClick={() => toggleViewMode("list")}
              className={cn(
                "text-xl text-red-300 hover:bg-transparent hover:text-white",
                viewMode == "list" && "text-white"
              )}>
              <FaListUl />
            </Button>
            <Button
              variant="ghost"
              onClick={() => toggleViewMode("grid")}
              className={cn(
                "text-xl text-red-300 hover:bg-transparent hover:text-white",
                viewMode === "grid" && "text-white"
              )}>
              <IoGrid />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
