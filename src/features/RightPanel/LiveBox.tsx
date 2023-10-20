import { ViewTypes } from "../../types/ViewTypes";
import ModalContent from "./ModalContent";

const LiveBox = ({ activeView }: ViewTypes) => {
  return (
    <div className="border rounded-md border-gray-300 mt-5 p-4 bg-liveboxBg bg-cover bg-no-repeat">
      <div className="bg-white inline-block px-4 py-2 rounded-md text-heading font-medium mb-7">
        Live preview
      </div>
      <div className="flex justify-center" id="modal-content">
        <ModalContent activeView={activeView} />
      </div>
    </div>
  );
};
export default LiveBox;
