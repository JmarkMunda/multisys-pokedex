import { Props } from "./types";
import PokemonCard from "../PokemonCard";

const PokemonList = ({ data }: Props) => {
  return (
    <main className="container flex justify-center flex-wrap card-container-effect">
      {data.map((item) => (
        <PokemonCard key={item.name} name={item.name} url={item.url} />
      ))}
    </main>
  );
};

export default PokemonList;
