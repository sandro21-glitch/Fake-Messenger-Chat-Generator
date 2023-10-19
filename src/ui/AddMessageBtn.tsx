import { BiMessageSquareAdd } from "react-icons/bi";

const AddMessageBtn = () => {
  return (
    <button
      type="submit"
      className="bg-teal text-heading mb-2 text-white p-2 rounded-md hover:opacity-70 transition-opacity ease-in duration-100"
    >
      <div className="flex items-center gap-2">
        Add Message
        <BiMessageSquareAdd />
      </div>
    </button>
  );
};
export default AddMessageBtn;
