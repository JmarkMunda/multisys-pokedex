import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTypeColor = (type: string) => {
  switch (type) {
    case "normal":
      return "bg-gray-500 text-white";
    case "fire":
      return "bg-red-500 text-white";
    case "water":
      return "bg-blue-500 text-white";
    case "grass":
      return "bg-green-500 text-white";
    case "bug":
      return "bg-green-300 text-black";
    case "poison":
      return "bg-purple-500 text-white";
    case "electric":
      return "bg-yellow-500 text-white";
    case "ice":
      return "bg-sky-300 text-white";
    case "fairy":
      return "bg-pink-500 text-white";
    case "rock":
      return "bg-gray-800 text-white";
    case "ground":
      return "bg-orange-800 text-white";
    case "dark":
      return "bg-purple-900 text-white";
    case "psychic":
      return "bg-blue-200 text-black";
    case "dragon":
      return "bg-red-800 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};

export const capitalize = (text: string) => {
  const splitLetters = text.split("");
  const firstLetter = splitLetters[0].toUpperCase();
  const combinedWord = [...firstLetter, ...splitLetters.slice(1)];
  return combinedWord;
};

export const getLocalStorage = (key: string) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.log("Error getLocalStorage: ", error);
    return error;
  }
};
export const setLocalStorage = <T>(key: string, value: T) => {
  try {
    const jsonValue = JSON.stringify(value);
    return localStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log("Error setLocalStorage: ", error);
    return error;
  }
};

export const deleteLocalStorage = (key: string) => {
  try {
    return localStorage.removeItem(key);
  } catch (error) {
    console.log("Error deleteLocalStorage: ", error);
    return error;
  }
};

export const clearLocalStorage = () => {
  try {
    return localStorage.clear();
  } catch (error) {
    console.log("Error clearLocalStorage: ", error);
    return error;
  }
};
