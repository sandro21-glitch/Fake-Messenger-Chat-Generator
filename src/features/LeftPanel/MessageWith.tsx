import { useState, useEffect } from "react";
import TextHeading from "../../ui/TextHeading";
import { useChatContext } from "../../context/ChatContext";

const MessageWith = () => {
  const { updateName } = useChatContext();
  const [name, setName] = useState("Sandro Papidze");
  useEffect(() => {
    updateName(name);
  }, [name]);
  return (
    <div className="w-full mb-5">
      <TextHeading text="Direct message with" />
      <div>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none border w-full h-[30px] p-2 rounded-md text-labels"
        />
      </div>
    </div>
  );
};
export default MessageWith;
