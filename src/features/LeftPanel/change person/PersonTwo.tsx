import TextHeading from "../../../ui/TextHeading";

const PersonTwo = () => {
  return (
    <div className="border border-gray-300 px-2">
      <div className="py-2">
        <label htmlFor="message" className="text-labels font-semibold">
          Message
        </label>
        <textarea
          name=""
          id="message"
          className="w-full min-h-[100px] text-labels outline-none rounded-md border border-gray-300 p-2"
        ></textarea>
      </div>
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