import TextHeading from "../../ui/TextHeading";

const Clock = () => {
  return (
    <div className="w-1/2">
      <TextHeading text="clock" />
      <div>
        <input
          type="text"
          placeholder="10:04 am"
          className="border outline-none p-1 w-full rounded-md h-[30px] text-labels"
          value={"10:04 am"}
        />
      </div>
    </div>
  );
};
export default Clock;
