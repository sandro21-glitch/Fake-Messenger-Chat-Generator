import TextHeading from "../../../ui/TextHeading";
import PersonTwoForm from "./PersonTwoForm";
import PersonTwoStatus from "./PersonTwoStatus";

const PersonTwo = () => {
  return (
    <div className="border border-gray-300 px-2">
      <PersonTwoForm />
      {/* message status */}
      <div className="">
        <TextHeading text="Message Status :" />
        <PersonTwoStatus />
      </div>
    </div>
  );
};
export default PersonTwo;
