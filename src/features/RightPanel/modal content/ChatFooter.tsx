import chatFooter from "/chat-footer.png";
import chatFooterDesktop from "/chat-desktop-footer.png";
import { ViewTypes } from "../../../types/ViewTypes";
import { useChatContext } from "../../../context/ChatContext";

const ChatFooter = ({ activeView }: ViewTypes) => {
  const { state } = useChatContext();
  const {
    parts: { hideFooter },
  } = state;
  if (hideFooter) return null;
  return (
    <div>
      <img
        src={activeView === "desktop" ? chatFooterDesktop : chatFooter}
        alt="chat footer"
        className="w-full h-auto"
      />
    </div>
  );
};
export default ChatFooter;
