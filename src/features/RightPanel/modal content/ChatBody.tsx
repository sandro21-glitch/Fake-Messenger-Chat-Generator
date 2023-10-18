import MessageReceived from "./MessageReceived";
import MessageSent from "./MessageSent";

const ChatBody = () => {
  return (
    <div className="bg-white px-4 py-2 min-h-[453px]">
      <div>
        {/* received message */}
        <MessageReceived />
        {/* sent message */}
        <MessageSent />
      </div>
    </div>
  );
};
export default ChatBody;
