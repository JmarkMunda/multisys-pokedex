import { CapturedPokemonType } from "@/lib/types";
import { getLocalStorage } from "@/lib/utils";
import { useCallback, useState } from "react";

const useCaptureRelease = () => {
  const [showCaptureModal, setShowCaptureModal] = useState(false);
  const [showReleaseModal, setShowReleaseModal] = useState(false);

  const handleOpenCaptureModal = () => setShowCaptureModal(true);
  const handleCloseCaptureModal = () => setShowCaptureModal(false);

  const handleOpenReleaseModal = () => setShowReleaseModal(true);
  const handleCloseReleaseModal = () => setShowReleaseModal(false);

  const checkIfPokemonCaptured = useCallback((id: string) => {
    const pokemons: CapturedPokemonType[] | null =
      getLocalStorage("my-pokemons");
    if (!pokemons) return false;
    const isExist = pokemons.some((pokemon) => pokemon.id == id);
    return isExist;
  }, []);

  return {
    showCaptureModal,
    showReleaseModal,
    handleOpenCaptureModal,
    handleCloseCaptureModal,
    handleOpenReleaseModal,
    handleCloseReleaseModal,
    checkIfPokemonCaptured,
  };
};

export default useCaptureRelease;
