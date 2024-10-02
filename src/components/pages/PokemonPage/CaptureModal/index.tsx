import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Props } from "./types";
import { DatePicker } from "@/components/ui/DatePicker";
import { ChangeEvent, useState } from "react";
import { toast } from "react-toastify";
import { getLocalStorage, setLocalStorage } from "@/lib/utils";
import { CapturedPokemonType } from "@/lib/types";
import {
  CAPTURE_ERROR_MESSAGE,
  CAPTURE_SUCCESS_MESSAGE,
} from "@/lib/constants";

const CaptureModal = ({ id, name, isVisible, onClose }: Props) => {
  const [nickname, setNickname] = useState("");
  const [date, setDate] = useState<Date>();

  const handleOnChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  const handleDateSelect = (date: Date | undefined) => setDate(date);

  const handleSubmit = () => {
    if (!nickname || !date) {
      return toast.error(CAPTURE_ERROR_MESSAGE);
    }
    handleCapture();
    onClose();
  };

  const handleCapture = () => {
    // Check if localstorage for my-pokemons is initialize
    const pokemons: CapturedPokemonType[] | null =
      getLocalStorage("my-pokemons"); // returns pokemons or null
    if (!pokemons) {
      toast.success(CAPTURE_SUCCESS_MESSAGE);
      return setLocalStorage("my-pokemons", [
        {
          id,
          name,
          url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
          nickname,
          date: date!.toDateString(),
        },
      ]);
    }
    // Check if exist
    const isExist = pokemons.some((pokemon) => pokemon.id === id);
    if (isExist) return toast.warning("Pokemon already captured");
    // Store it alongside the current saved pokemon
    const storeData: CapturedPokemonType[] = [
      ...pokemons,
      {
        id,
        name,
        url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
        nickname,
        date: date!.toDateString(),
      },
    ];
    // Save it in JSON format
    setLocalStorage("my-pokemons", storeData);
    return toast.success(CAPTURE_SUCCESS_MESSAGE);
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="p-2 flex flex-col gap-4">
        <h1 className="font-bold text-lg">Personalize Your Pokémon!</h1>
        <div className="my-4 flex flex-col gap-2">
          <Input placeholder="Enter nickname" onChange={handleOnChangeName} />
          <DatePicker onDateSelect={handleDateSelect} />
        </div>
        <Button
          onClick={handleSubmit}
          className="bg-yellow-500 hover:bg-yellow-600 hover:font-bold">
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default CaptureModal;
