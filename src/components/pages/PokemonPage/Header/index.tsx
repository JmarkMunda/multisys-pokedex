import { capitalize } from "@/lib/utils";
import { FaCaretLeft } from "react-icons/fa";
import { Props } from "./types";

const Header = ({ id, name, handleBackClick }: Props) => {
  return (
    <div className="container flex-1 flex items-center justify-between">
      <span
        onClick={handleBackClick}
        className="flex items-center cursor-pointer hover:text-blue-600">
        <FaCaretLeft /> Back
      </span>
      <h1 className="text-3xl font-bold">{capitalize(name)}</h1>
      <span>#{id}</span>
    </div>
  );
};

export default Header;
