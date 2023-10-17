import TextHeading from "../../ui/TextHeading";

const MessageWith = () => {
  return (
    <div className="w-full mb-5">
      <TextHeading text="Direct message with" />
      <div>
        <input
          type="text"
          name=""
          id=""
          value={"Sandro Papidze"}
          className="outline-none border w-full h-[30px] p-2 rounded-md text-labels"
        />
      </div>
    </div>
  );
};
export default MessageWith;
