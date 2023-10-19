import messageSent from "/message-sent.png";
type MessageType = {
  message: string;
  index: number;
};
const MessageSent = ({ message, index }: MessageType) => {
  return (
    <div className="flex justify-end w-full relative pt-[.75rem]">
      <div
        className="text-labels bg-fbBlue text-white border border-fbLightBlue
     rounded-[20px] py-[6px] px-[10px] w-fit max-w-[240px] min-h-[30px] break-words fade-in-text "
      >
        {message}
      </div>
      <div className="absolute right-[-9px] bottom-[-8px]">
        <img
          src={messageSent}
          alt="message"
          className="w-[11px] h-[11px] opacity-[.4]"
        />
      </div>
    </div>
  );
};
export default MessageSent;
