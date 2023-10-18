import { useState, useEffect } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { ViewTypes } from "../../../types/ViewTypes";
import { useChatContext } from "../../../context/ChatContext";

const tempWidth = 100;
const ModalHeader = ({ activeView }: ViewTypes) => {
  const { state } = useChatContext();
  const {
    parts: { hideHeader },
  } = state;
  const [percent, setPercent] = useState<number>(tempWidth);
  useEffect(() => {
    setPercent(tempWidth);
  }, [percent]);

  if (activeView === "desktop") return null;
  if (hideHeader) return null;
  return (
    <div className="px-[5px] py-[1px]">
      <ul className="flex items-center justify-end gap-1 bg-modalHeader">
        <li>
          <AiOutlineWifi className="text-icons" />
        </li>
        <li>
          <GiNetworkBars className="text-icons" />
        </li>
        <li>
          <GiNetworkBars className="text-icons" />
        </li>
        <li className="text-icons font-medium">10:04 am</li>
        <li className="flex items-center">
          <span className="text-icons font-medium mr-2">{percent}%</span>
          <div
            className="w-[24px] h-[12px] border border-[#000000] rounded-[1px] relative z-[9999]
            before:absolute before:-left-1 before:top-1/2 before:translate-y-[-50%]
            before:h-[7px] before:w-[2.8px] before:bg-[#000000]"
          >
            <div
              className={`absolute bg-[#000000] right-0 top-0 w-[${percent}%] h-full`}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ModalHeader;
