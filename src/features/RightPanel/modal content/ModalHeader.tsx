import { useState, useEffect } from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { GiNetworkBars } from "react-icons/gi";
import { ViewTypes } from "../../../types/ViewTypes";
import { useChatContext } from "../../../context/ChatContext";

const ModalHeader = ({ activeView }: ViewTypes) => {
  const { state } = useChatContext();
  const {
    parts: { hideHeader },
    layout,
    battery,
    clock,
  } = state;
  if (activeView === "desktop") return null;
  if (hideHeader) return null;
  return (
    <div className="px-[5px] py-[1px]">
      <ul
        className={`flex items-center ${
          layout === "android" ? "justify-end" : "justify-between"
        }  gap-1 bg-modalHeader`}
      >
        {layout === "android" ? (
          <li>
            <AiOutlineWifi className="text-icons" />
          </li>
        ) : null}
        {layout === "android" ? null : (
          <li className="flex items-center gap-[2.5px]">
            <div>
              <GiNetworkBars className="text-icons" />
            </div>
            <div className="text-icons font-medium">Cellfie</div>
            <div>
              <AiOutlineWifi className="text-icons" />
            </div>
          </li>
        )}
        {layout == "android" ? (
          <li>
            <GiNetworkBars className="text-icons" />
          </li>
        ) : null}

        <li className="text-icons font-medium">{clock}</li>
        <li className="flex items-center">
          <span className="text-icons font-medium mr-2">{battery}%</span>
          <div
            className={`w-[24px] h-[12px] border border-[#000000] rounded-[1px] relative z-[9999]
            before:absolute ${
              layout === "android" ? "before:-left-1" : "before:-right-1"
            }  before:top-1/2 before:translate-y-[-50%]
            before:h-[7px] before:w-[2.8px] before:bg-[#000000]`}
          >
            <div
              style={{ width: `${battery}%`, maxWidth: "100%" }}
              className={`absolute bg-[#000000] right-0 top-0  h-full`}
            ></div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ModalHeader;
