import { useEffect, useState } from "react";
import { useChatContext } from "../../../context/ChatContext";
import messageSent from "/message-sent.png";
import messageDeliverd from "/message-deliverd.png";
type MessageType = {
  message: string;
  index: number;
};

const MessageSent = ({ message, index }: MessageType) => {
  const { state } = useChatContext();
  const { allMessages, status, img } = state;

  const [lastMessageIndex, setLastMessageIndex] = useState(-1);

  useEffect(() => {
    for (let i = allMessages.length - 1; i >= 0; i--) {
      if (allMessages[i].from === "PersonTwo") {
        setLastMessageIndex(i);
        break;
      }
    }
  }, [allMessages]);
  return (
    <div className="flex justify-end w-full relative pt-[.75rem]">
      <div
        className="text-labels bg-fbBlue text-white border border-fbLightBlue
     rounded-[20px] py-[6px] px-[10px] w-fit max-w-[240px] min-h-[30px] break-words fade-in-text "
      >
        <span>{message}</span>
      </div>
      {index === lastMessageIndex ? (
        <div className="absolute right-[-9px] bottom-[-8px] fade-in-text rounded-full overflow-hidden">
          <img
            src={
              status.sent
                ? messageSent
                : status.delivered
                ? messageDeliverd
                : status.seen
                ? img
                : ""
            }
            alt="message"
            className={`w-[11px] h-[11px] ${
              status.seen === true ? "opacity-100" : "opacity-[.6]"
            } `}
          />
        </div>
      ) : null}
    </div>
  );
};
export default MessageSent;
