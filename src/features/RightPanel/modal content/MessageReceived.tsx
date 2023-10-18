import profile from "/profile.png";

const MessageReceived = () => {
  return (
    <div className="flex justify-start py-2">
      <div className="flex items-center gap-2">
        <img
          src={profile}
          alt="profile"
          className="w-[28px] h-[28px] rounded-full object-cover"
        />
        <div
          className="text-labels bg-[#e6ecf0] text-[#14171a]
           rounded-[20px] py-[6px] px-[10px] w-fit max-w-[240px] min-h-[30px] break-words"
        >
          როგორ ხარ?
        </div>
      </div>
    </div>
  );
};
export default MessageReceived;
