import TextHeading from "../../ui/TextHeading";

const Battery = () => {
  return (
    <div className="w-1/2">
      <TextHeading text="battery" />
      <div>
        <input
          type="text"
          placeholder="50"
          className="border outline-none p-1 w-full rounded-md h-[30px] text-labels"
          value={50}
        />
      </div>
    </div>
  );
};
export default Battery;
