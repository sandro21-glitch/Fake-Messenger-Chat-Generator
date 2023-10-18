import Parts from "./Parts";
import Layout from "./Layout";
import Clock from "./Clock";
import Battery from "./Battery";
import MessageWith from "./MessageWith";
import MessageSenderSelector from "./MessageSenderSelector";
import { ViewTypes } from "../../types/ViewTypes";

const LeftPanel = ({ activeView }: ViewTypes) => {
  return (
    <div className="border border-gray-300 p-4 flex-1 left-panel">
      <div className="flex gap-5 mb-5">
        <Parts activeView={activeView} />
        <Layout />
      </div>
      <div className="flex gap-5 mb-5">
        <Clock />
        <Battery />
      </div>
      <MessageWith />
      <MessageSenderSelector />
    </div>
  );
};
export default LeftPanel;
