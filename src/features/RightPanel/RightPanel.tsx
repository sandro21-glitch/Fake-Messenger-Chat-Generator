import LiveBox from "./LiveBox";
import ViewTabHeader from "./ViewTabHeader";
import { ViewTypes } from "../../types/ViewTypes";
interface View extends ViewTypes {
  setActiveView: (view: string) => void;
}
const RightPanel = ({ activeView, setActiveView }: View) => {
  return (
    <div className="w-full">
      <ViewTabHeader activeView={activeView} setActiveView={setActiveView} />
      <LiveBox activeView={activeView} />
    </div>
  );
};
export default RightPanel;
