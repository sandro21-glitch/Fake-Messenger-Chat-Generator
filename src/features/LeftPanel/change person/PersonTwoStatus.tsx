import { useChatContext } from "../../../context/ChatContext";
const PersonTwoStatus = () => {
  const { state, updateActiveStatus } = useChatContext();
  const { status } = state;
  const { sent, delivered, seen } = status;

  const handleActiveStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    updateActiveStatus(name);
  };

  return (
    <div className="space-y-1 my-2">
      <div className="flex items-center">
        <input
          checked={sent}
          type="radio"
          name="sent"
          id="sent"
          className="mr-1"
          onChange={handleActiveStatus}
        />
        <label htmlFor="sent" className="text-labels">
          Sent
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={delivered}
          type="radio"
          name="delivered"
          id="delivered"
          className="mr-1"
          onChange={handleActiveStatus}
        />
        <label htmlFor="delivered" className="text-labels">
          Delivered
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={seen}
          type="radio"
          name="seen"
          id="seen"
          className="mr-1"
          onChange={handleActiveStatus}
        />
        <label htmlFor="seen" className="text-labels">
          Seen
        </label>
      </div>
    </div>
  );
};
export default PersonTwoStatus;
