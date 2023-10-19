import { useState, useEffect } from "react";
import TextHeading from "../../ui/TextHeading";
import { useChatContext } from "../../context/ChatContext";
const Clock = () => {
  const { updateClockValue } = useChatContext();
  const [clock, setClock] = useState("10:04 am");
  useEffect(() => {
    updateClockValue(clock);
  }, [clock]);
  return (
    <div className="w-1/2">
      <TextHeading text="clock" />
      <div>
        <input
          type="text"
          placeholder="10:04 am"
          className="border outline-none p-1 w-full rounded-md h-[30px] text-labels"
          value={clock}
          onChange={(e) => setClock(e.target.value)}
        />
      </div>
    </div>
  );
};
export default Clock;
