import { Props } from "./types";
import PokemonCard from "../PokemonCard";
import Empty from "@/components/ui/Empty";
import emptyImage from "@/assets/empty-pokemon.png";

const PokemonList = ({ data, currentPage }: Props) => {
  if (data.length === 0)
    return (
      <div className="h-[93vh]">
        <Empty image={emptyImage} message="Uh-oh! No Pokemon found!" />
      </div>
    );

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
