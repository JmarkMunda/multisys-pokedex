import axiosInstance from "./config";

export const getAllPokemon = async () => {
  try {
    const res = await axiosInstance.get("/pokemon");
    return res.data;
  } catch (error) {
    console.log("Error getAllPokemon: ", error);
  }
};

export const getPokemon = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/pokemon/${id}`);
    return res.data;
  } catch (error) {
    console.log("Error getPokemon: ", error);
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
