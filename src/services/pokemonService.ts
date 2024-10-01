import { PokemonDetailsType, PokemonsResponseType } from "@/lib/types";
import axiosInstance from "./config";

export const getAllPokemon = async (
  limit = 10,
  offset = 10
): Promise<PokemonsResponseType> => {
  try {
    const url = `/pokemon?limit=${limit}&offset=${offset}`;
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.log("Error getAllPokemon: ", error);
    return Promise.reject(error);
  }
};

export const getPokemon = async (id: string): Promise<PokemonDetailsType> => {
  try {
    const url = `/pokemon/${id}`;
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.log("Error getPokemon: ", error);
    return Promise.reject(error);
  }
};

export const getPokemonCharacteristics = async (id: string) => {
  try {
    const url = `/characteristic/${id}`;
    const res = await axiosInstance.get(url);
    return res.data;
  } catch (error) {
    console.log("Error getPokemonCharacteristics", error);
  }
};
