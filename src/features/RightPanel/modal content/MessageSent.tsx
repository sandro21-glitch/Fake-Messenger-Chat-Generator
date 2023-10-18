import messageSent from "/message-sent.png";

const MessageSent = () => {
  return (
    <div className="flex justify-end w-full relative py-2">
      <div
        className="text-labels bg-fbBlue text-white border border-fbLightBlue
     rounded-[20px] py-[6px] px-[10px] w-fit max-w-[240px] min-h-[30px] break-words"
      >
        კარგად შენ?
      </div>
      <div className="absolute right-[-9px] bottom-[-1px]">
        <img
          src={messageSent}
          alt=""
          className="w-[11px] h-[11px] opacity-[.4]"
        />
      </div>
    </div>
  );
};
export default MessageSent;
