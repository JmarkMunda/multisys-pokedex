import Modal from "@/components/ui/Modal";
import { Props } from "./types";
import { getLocalStorage, setLocalStorage } from "@/lib/utils";
import { CapturedPokemonType } from "@/lib/types";
import { Button } from "@/components/ui/button";

const ReleaseModal = ({ id, isVisible, onClose }: Props) => {
  const handleReleasePokemon = () => {
    // Find the pokemon first then delete it in the localstorage
    const pokemons: CapturedPokemonType[] | null =
      getLocalStorage("my-pokemons");
    const newData = pokemons?.filter((pokemon) => pokemon.id !== id);
    setLocalStorage("my-pokemons", newData);
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="p-2 flex flex-col gap-4">
        <h1 className="font-bold text-lg">Oh no!</h1>
        <p>Are you sure you want to release this pokemon?</p>

        <div className="flex gap-4 justify-end">
          <Button onClick={onClose}>No</Button>
          <Button onClick={handleReleasePokemon}>Yes</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReleaseModal;
