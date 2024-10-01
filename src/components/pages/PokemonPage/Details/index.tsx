import { Props } from "./types";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Details = ({ baseExp, weight, height, isCaptured }: Props) => {
  return (
    <div className="mb-8 p-4 sm:flex-1">
      <p className="text-xl font-bold text-gray-900">Details:</p>
      <p>
        Experience: <span>{baseExp ?? 0} XP</span>
      </p>
      <p>
        Weight: <span>{weight ?? 0}</span>
      </p>
      <p>
        Height: <span>{height ?? 0}</span>
      </p>
      <p className="text-xl font-bold mt-8 text-gray-900">Status:</p>
      <div className="flex items-center gap-2">
        <p
          className={`font-bold ${
            isCaptured ? "text-green-700" : "text-red-500"
          }`}>
          {isCaptured ? "Owned" : "Not Owned"}
        </p>
        {isCaptured ? <FaCheck color="green" /> : <MdClose color="red" />}
      </div>
    </div>
  );
};

export default Details;
