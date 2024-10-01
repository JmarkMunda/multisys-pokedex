import { Props } from "./types";

const DisplayImage = ({ image }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-64 h-64 mb-[-120px] z-10">
        <img
          src={image ?? ""}
          alt="pokemon-img"
          className="w-full h-full object-contain drop-shadow-2xl "
        />
      </div>
    </div>
  );
};

export default DisplayImage;
