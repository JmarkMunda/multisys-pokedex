import { Props } from "./types";
import PokemonCard from "../PokemonCard";
import Empty from "@/components/ui/Empty";
import eggImage from "@/assets/egg.png";

const PokemonList = ({ data, viewMode, currentPage }: Props) => {
  if (data.length === 0)
    return (
      <div className="h-[93vh]">
        <Empty image={eggImage} message="Uh-oh! No Pokemon found!" />
      </div>
    );

  return (
    <main className="container flex justify-center flex-wrap card-container-effect">
      {data.map((item, index) => (
        <PokemonCard
          key={item!.name}
          name={item!.name!}
          url={item!.url!}
          viewMode={viewMode}
          currentPage={currentPage}
          index={index}
          nickname={item?.nickname}
          date={item?.date}
        />
      ))}
    </main>
  );
};

export default PokemonList;
