import { useEffect, useState } from "react";
import TextHeading from "../../ui/TextHeading";
import { useChatContext } from "../../context/ChatContext";

const Battery = () => {
  const { updateBatteryValue } = useChatContext();
  const [batteryValue, setBatteryValue] = useState<number>(50);
  const handleBtteryValue = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value, 10);
    if (!isNaN(newValue)) {
      setBatteryValue(newValue);
    }
  };
  useEffect(() => {
    updateBatteryValue(batteryValue);
  }, [batteryValue]);
  return (
    <div className="w-full md:w-1/2">
      <TextHeading text="battery" />
      <div>
        <input
          type="number"
          className="border outline-none p-1 w-full rounded-md h-[30px] text-labels"
          value={batteryValue}
          onChange={handleBtteryValue}
        />
      </div>
    </div>
  );
};
export default Battery;
