import { useChatContext } from "../../../context/ChatContext";
import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";

const ChatBody = () => {
  const { state } = useChatContext();
  const { allMessages } = state;
  return (
    <div className="bg-white px-4 py-2 min-h-[453px]">
      <div>
        {allMessages.map((message, index) => {
          if (message.from === "PersonOne") {
            /* received message */
            return <MessageReceived key={index} message={message.text} />;
          } else {
            /* sent message */
            return <MessageSent key={index} message={message.text} index={index} />;
          }
        })}
      </div>
    </div>
  );
};
export default ChatBody;
