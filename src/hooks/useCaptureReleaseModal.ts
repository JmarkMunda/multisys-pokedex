import { useState } from "react";

const useCaptureReleaseModal = () => {
  const [showCaptureModal, setShowCaptureModal] = useState(false);
  const [showReleaseModal, setShowReleaseModal] = useState(false);

  const handleOpenCaptureModal = () => setShowCaptureModal(true);
  const handleCloseCaptureModal = () => setShowCaptureModal(false);

  const handleOpenReleaseModal = () => setShowReleaseModal(true);
  const handleCloseReleaseModal = () => setShowReleaseModal(false);

  return {
    showCaptureModal,
    showReleaseModal,
    handleOpenCaptureModal,
    handleCloseCaptureModal,
    handleOpenReleaseModal,
    handleCloseReleaseModal,
  };
};

export default useCaptureReleaseModal;
