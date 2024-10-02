import {
  CAPTURE_ERROR_MESSAGE,
  CAPTURE_SUCCESS_MESSAGE,
} from "@/lib/constants";
import { CapturedPokemonType } from "@/lib/types";
import { getLocalStorage, setLocalStorage } from "@/lib/utils";
import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";

const useCapture = (id: string, name: string) => {
  const [nickname, setNickname] = useState("");
  const [date, setDate] = useState<Date>();

  const handleOnChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);

  const handleDateSelect = (date: Date | undefined) => setDate(date);

  const handleCapture = () => {
    // Current pokemon data to be saved
    const capturedPokemonData = {
      id,
      name,
      url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
      nickname,
      date: date!.toDateString(),
    };
    const capturedPokemons = getCapturedPokemons(); // Array of pokemons or null

    // Initialize localstorage
    if (capturedPokemons === null) {
      toast.success(CAPTURE_SUCCESS_MESSAGE);
      return setLocalStorage("my-pokemons", [capturedPokemonData]);
    }

    // Store it alongside the other captured pokemon
    const storeData: CapturedPokemonType[] = [
      ...capturedPokemons,
      capturedPokemonData,
    ];
    // Save it in JSON format
    setLocalStorage("my-pokemons", storeData);
    return toast.success(CAPTURE_SUCCESS_MESSAGE);
  };

  const getCapturedPokemons = useCallback(() => {
    const pokemons: CapturedPokemonType[] | null =
      getLocalStorage("my-pokemons");
    if (!pokemons) return null;
    return pokemons;
  }, []);

  const isPokemonCaptured = useCallback(() => {
    const pokemons: CapturedPokemonType[] | null =
      getLocalStorage("my-pokemons");
    if (!pokemons) return false;
    const isExist = pokemons.some((pokemon) => pokemon.id == id);
    return isExist;
  }, [id]);

  const isValid = () => {
    if (!nickname || !date) {
      toast.error(CAPTURE_ERROR_MESSAGE);
      return false;
    }
    return true;
  };

  return {
    nickname,
    date,
    handleOnChangeName,
    handleDateSelect,
    handleCapture,
    isValid,
    getCapturedPokemons,
    isPokemonCaptured,
  };
};

export default useCapture;
