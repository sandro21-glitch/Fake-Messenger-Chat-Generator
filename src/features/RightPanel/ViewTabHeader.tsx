import { BiDesktop } from "react-icons/bi";
import { FaTabletAlt, FaMobileAlt } from "react-icons/fa";
type ViewTypes = {
  activeView: string;
  setActiveView: (view: string) => void;
};
const ViewTabHeader = ({ activeView, setActiveView }: ViewTypes) => {
  return (
    <ul className="w-full flex cursor-pointer items-center border border-gray-300 rounded-md">
      <li
        onClick={() => setActiveView("desktop")}
        className={`${
          activeView === "desktop"
            ? "bg-teal text-white hover:bg-white hover:text-teal"
            : "bg-none"
        } p-2 flex-center gap-2 flex-1 hover:text-teal transition-colors ease-in duration-150`}
      >
        <BiDesktop />
        <span className="text-heading">Desktop View</span>
      </li>
      <li
        onClick={() => setActiveView("tablet")}
        className={`${
          activeView === "tablet"
            ? "bg-teal text-white hover:bg-white hover:text-teal"
            : "bg-none"
        } flex-center gap-2 flex-1 p-2 hover:text-teal transition-colors ease-in duration-150 relative cursor-pointer
       before:w-[1px] before:h-full before:absolute before:bg-gray-300 before:left-0`}
      >
        <FaTabletAlt />
        <span className="text-heading">Tablet View</span>
      </li>
      <li
        onClick={() => setActiveView("mobile")}
        className={`${
          activeView === "mobile"
            ? "bg-teal text-white hover:bg-white hover:text-teal"
            : "bg-none"
        } flex-center gap-2 flex-1 p-2 hover:text-teal transition-colors ease-in duration-150 relative cursor-pointer
       before:w-[1px] before:h-full before:absolute before:bg-gray-300 before:left-0`}
      >
        <FaMobileAlt />
        <span className="text-heading">Mobile View</span>
      </li>
    </ul>
  );
};
export default ViewTabHeader;
