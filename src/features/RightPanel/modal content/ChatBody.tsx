import { useChatContext } from "../../../context/ChatContext";
import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";
const ChatBody = () => {
  const { state } = useChatContext();
  const { allMessages } = state;
  if (allMessages.length === 0) {
    return (
      <div className="bg-white px-4 py-2 min-h-[453px]">
        {/* Render your default message when allMessages is empty */}
        <MessageReceived key={0} message="Hi👋" />
        <MessageSent key={1} message={"Hi"} index={1} />
      </div>
    );
  }

  return (
    <div className="bg-white px-4 py-2 min-h-[453px]">
      {allMessages.map((message, index) => {
        if (message.from === "PersonOne") {
          /* received message */
          return <MessageReceived key={index} message={message.text} />;
        } else {
          /* sent message */
          return (
            <MessageSent key={index} message={message.text} index={index} />
          );
        }
      })}
    </div>
  );
};
export default ChatBody;
