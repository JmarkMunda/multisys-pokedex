import { LIMIT } from "@/lib/constants";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import usePokemons from "./usePokemons";

const usePagination = () => {
  const { state } = useLocation();
  const [currentPage, setCurrentPage] = useState((state?.page as number) ?? 1);
  const { total } = usePokemons(currentPage);
  const totalPages = Math.ceil(total / LIMIT);

  useEffect(() => {
    // Reset routing history on refresh
    window.history.replaceState({}, "");
  }, []);

  const handlePrevPage = () => {
    setCurrentPage((prev) => {
      if (prev <= 1) return prev;
      return prev - 1;
    });
  };
  const handleNextPage = () => {
    setCurrentPage((prev) => {
      if (prev === totalPages) return prev;
      return prev + 1;
    });
  };

  return { currentPage, totalPages, handlePrevPage, handleNextPage };
};

export default usePagination;
