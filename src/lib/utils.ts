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
      return "bg-green-300 text-white";
    case "poison":
      return "bg-purple-500 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};
