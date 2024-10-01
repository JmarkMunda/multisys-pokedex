import { Props } from "./types";
import emptyPokeball from "@/assets/empty-pokemon.png";
import capturedIcon from "@/assets/ball.png";

const CaptureButton = ({ isCaptured, handleClick }: Props) => {
  return (
    <div
      onClick={handleClick}
      className={`flex items-center gap-2 my-4 p-4 cursor-pointer font-bold transition-all ease-outhover:drop-shadow-xl hover:scale-125`}>
      <img
        src={isCaptured ? emptyPokeball : capturedIcon}
        className="w-8 h-8"
      />
      <p>{isCaptured ? "Release" : "Capture"}</p>
    </div>
  );
};

export default CaptureButton;
