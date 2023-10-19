import { useState } from "react";
import AddMessageBtn from "../../../ui/AddMessageBtn";
import { useChatContext } from "../../../context/ChatContext";
const PersonTwoForm = () => {
  const { addPersonTwoMessage } = useChatContext();
  const [message, setMessage] = useState<string>("");

  const handleUpateMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message !== "" && message !== null) {
      addPersonTwoMessage(message);
    }
  };
  return (
    <form className="py-2" onSubmit={handleUpateMessage}>
      <label htmlFor="message" className="text-labels font-semibold">
        Message
      </label>
      <textarea
        name=""
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full min-h-[100px] text-labels outline-none rounded-md border border-gray-300 p-2"
      ></textarea>
      <AddMessageBtn />
    </form>
  );
};
export default PersonTwoForm;
