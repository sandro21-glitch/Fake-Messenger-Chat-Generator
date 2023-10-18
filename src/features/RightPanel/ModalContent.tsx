import { ViewTypes } from "../../types/ViewTypes";
import ChatBody from "./modal content/ChatBody";
import ChatFooter from "./modal content/ChatFooter";
import ChatHeader from "./modal content/ChatHeader";
import ModalHeader from "./modal content/ModalHeader";

const ModalContent = ({ activeView }: ViewTypes) => {
  return (
    <div
      className={` ${
        activeView === "tablet"
          ? "w-[400px]"
          : activeView === "desktop"
          ? "w-full"
          : "modal-width"
      }  border border-gray-300`}
    >
      {/* modal header part */}
      <ModalHeader activeView={activeView} />
      {/* meseenger chat header */}
      <ChatHeader activeView={activeView} />
      {/* messenger chat body */}
      <ChatBody />
      {/* messenger chat footer */}
      <ChatFooter activeView={activeView} />
    </div>
  );
};
export default ModalContent;
