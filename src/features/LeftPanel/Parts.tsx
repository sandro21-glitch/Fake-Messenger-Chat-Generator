import TextHeading from "../../ui/TextHeading";

const Parts = () => {
  return (
    <div className="w-1/2">
      <TextHeading text="Parts :" />
      <div>
        <label htmlFor="active" className="text-labels cursor-pointer">
          <input type="checkbox" id="active" className="mr-1" />
          Active Now
        </label>
      </div>
      <div>
        <label htmlFor="header" className="text-labels cursor-pointer">
          <input type="checkbox" id="header" className="mr-1" />
          Hide Header
        </label>
      </div>
      <div>
        <label htmlFor="footer" className="text-labels cursor-pointer">
          <input type="checkbox" id="footer" className="mr-1" />
          Hide Footer
        </label>
      </div>
    </div>
  );
};
export default Parts;
