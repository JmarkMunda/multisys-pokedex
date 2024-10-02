import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Props } from "./types";
import { DatePicker } from "@/components/ui/DatePicker";
import useCapture from "@/hooks/useCapture";

const CaptureModal = ({ id, name, isVisible, onClose }: Props) => {
  const { isValid, handleCapture, handleOnChangeName, handleDateSelect } =
    useCapture(id, name);

  const handleSubmit = () => {
    if (!isValid()) return;
    handleCapture();
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onClose={onClose}>
      <div className="p-2 flex flex-col gap-4">
        <h1 className="font-bold text-lg">Personalize Your Pokémon!</h1>
        <div className="my-4 flex flex-col gap-2">
          <Input placeholder="Enter nickname" onChange={handleOnChangeName} />
          <DatePicker onDateSelect={handleDateSelect} />
        </div>
        <Button
          onClick={handleSubmit}
          className="bg-yellow-500 hover:bg-yellow-600 hover:font-bold">
          Save
        </Button>
      </div>
    </Modal>
  );
};

export default CaptureModal;
