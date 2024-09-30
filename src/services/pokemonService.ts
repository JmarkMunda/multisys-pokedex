import { PokemonDetailsType, PokemonsResponseType } from "@/lib/types";
import axiosInstance from "./config";

export const getAllPokemon = async (): Promise<PokemonsResponseType> => {
  try {
    const res = await axiosInstance.get("/pokemon");
    return res.data;
  } catch (error) {
    console.log("Error getAllPokemon: ", error);
    return Promise.reject(error);
  }
};

export const getPokemon = async (id: string): Promise<PokemonDetailsType> => {
  try {
    const res = await axiosInstance.get(`/pokemon/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error getPokemon: ", error);
    return Promise.reject(error);
  }
};

export const getPokemonCharacteristics = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/characteristic/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error getPokemonCharacteristics", error);
  }
};
