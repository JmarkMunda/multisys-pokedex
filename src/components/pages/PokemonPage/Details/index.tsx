import { Props } from "./types";

const Details = ({ baseExp, weight, height }: Props) => {
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
    </div>
  );
};

export default Details;
