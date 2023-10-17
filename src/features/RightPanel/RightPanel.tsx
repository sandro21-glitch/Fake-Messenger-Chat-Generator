import LiveBox from "./LiveBox";
import ViewTabHeader from "./ViewTabHeader";

const RightPanel = () => {
  return (
    <div className="w-full">
      <ViewTabHeader />
      <LiveBox />
    </div>
  );
};
export default RightPanel;
