import { useState } from "react";
import PersonOne from "./change person/PersonOne";
import PersonTwo from "./change person/PersonTwo";

const MessageSenderSelector = () => {
  const [activePerson, setActivePerson] = useState(1);
  return (
    <div>
      <div>
        <button
          onClick={() => setActivePerson(1)}
          className={`${
            activePerson == 1 ? "bg-teal text-white" : "bg-none text-black"
          }  text-heading  p-2 hover:bg-teal hover:text-white transition-colors ease-in duration-150`}
        >
          Person 1
        </button>
        <button
          onClick={() => setActivePerson(2)}
          className={`${
            activePerson == 2 ? "bg-teal text-white" : "bg-none text-black"
          }  text-heading  p-2 hover:bg-teal hover:text-white transition-colors ease-in duration-150`}
        >
          Person 2
        </button>
      </div>
      <div>{activePerson == 1 ? <PersonOne /> : <PersonTwo />}</div>
    </div>
  );
};
export default MessageSenderSelector;
