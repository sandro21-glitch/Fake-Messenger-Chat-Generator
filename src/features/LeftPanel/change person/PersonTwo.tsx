import TextHeading from "../../../ui/TextHeading";
import PersonTwoForm from "./PersonTwoForm";

const PersonTwo = () => {
  return (
    <div className="border border-gray-300 px-2">
      <PersonTwoForm />
      {/* message status */}
      <div className="">
        <TextHeading text="Message Status :" />
        <div className="space-y-1 my-2">
          <div className="flex items-center">
            <input type="radio" name="sent" id="sent" className="mr-1" />
            <label htmlFor="sent" className="text-labels">
              Sent
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              name="delivered"
              id="delivered"
              className="mr-1"
            />
            <label htmlFor="delivered" className="text-labels">
              Delivered
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="seen" id="seen" className="mr-1" />
            <label htmlFor="seen" className="text-labels">
              Seen
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonTwo;
