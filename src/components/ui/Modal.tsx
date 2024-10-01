import React from "react";

type Props = {
  isVisible: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

const Modal = ({ isVisible, onClose, children }: Props) => {
  if (!isVisible) return null;

  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => e.stopPropagation();

  return (
    <div
      className="bg-gray-900/30 fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center z-50"
      onClick={onClose}>
      <div className="bg-white p-4 rounded-xl" onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
