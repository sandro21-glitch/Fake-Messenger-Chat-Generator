import FbArrow from "/fb-chat-left-arrow.png";
import profile from "/profile.png";
import fbOnline from "/fb-online.png";
import fbOffline from "/fb-offline.png";
import { ViewTypes } from "../../../types/ViewTypes";
import { useChatContext } from "../../../context/ChatContext";
const ChatHeader = ({ activeView }: ViewTypes) => {
  const { state } = useChatContext();
  const {
    parts: { activeNow },
  } = state;
  return (
    <div className=" w-full h-[70px] bg-white p-4 flex items-center relative z-[9999] shadow-shadowBottom">
      {/* left content */}
      <div className="flex items-center w-[60%]">
        <div className="mr-4">
          <img src={FbArrow} alt="fb-arrow" className="w-[22px] h-full" />
        </div>
        <div className="mr-2">
          <img
            src={profile}
            alt="profile"
            className="w-[35px] h-[35px] rounded-full"
          />
        </div>
        <div>
          <span className="text-[#14171a] text-labels">Sandro Papidze</span>
        </div>
      </div>
      {/* right side */}
      {activeView === "desktop" ? null : (
        <div className="flex justify-end w-[40%]">
          <img
            src={activeNow ? fbOnline : fbOffline}
            alt="online"
            className="w-[100px] h-full object-cover object-right"
          />
        </div>
      )}
    </div>
  );
};
export default ChatHeader;
