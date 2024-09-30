import { Props } from "./types";
import PokemonCard from "../PokemonCard";

const PokemonList = ({ data, currentPage }: Props) => {
  return (
    <main className="container flex justify-center flex-wrap card-container-effect">
      {data.map((item, index) => (
        <PokemonCard
          key={item.name}
          name={item.name}
          url={item.url}
          currentPage={currentPage}
          index={index}
        />
      ))}
    </main>
  );
};

export default PokemonList;
