import { useChatContext } from "../../../context/ChatContext";
import profile from "/profile.png";
type MessageType = {
  message: string;
};
const MessageReceived = ({ message }: MessageType) => {
  const { state } = useChatContext();
  const { img } = state;
  return (
    <div className="flex justify-start pt-[.75rem]">
      <div className="flex items-end gap-2">
        <img
          src={
            img === ""
              ? `data:image/png;base64,${img}`
              : `data:image/png;base64,${profile}`
          }
          alt="profile"
          className="w-[28px] h-[28px] rounded-full object-cover "
        />
        <div
          className="flex items-center text-labels bg-[#e6ecf0] text-[#14171a]
           rounded-[20px] py-[6px] px-[10px] w-fit max-w-[240px] min-h-[30px] break-words fade-in-text"
        >
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};
export default MessageReceived;
