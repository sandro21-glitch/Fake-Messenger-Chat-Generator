import AddMessageBtn from "../../../ui/AddMessageBtn";
import profile from "/profile.png";

const PersonOne = () => {
  return (
    <div className="border border-gray-300 px-2">
      {/* profile photo upload */}
      <div className="p-5 flex  items-center">
        <div className="w-1/2 flex  justify-center">
          <div className="border p-1 rounded-sm w-[50px]">
            <img
              src={profile}
              alt="profile"
              className="w-full h-full rounded-sm"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2 text-center">
          <strong className="text-labels mb-2">Profile Photo</strong>
          <label
            htmlFor="img"
            className="text-labels bg-teal text-white px-2 py-[5px] rounded-[.2rem] cursor-pointer hover:opacity-70"
          >
            Select Image
          </label>
          <input type="file" name="uploadfile" id="img" className="hidden" />
        </div>
      </div>
      <div className="">
        <label htmlFor="message" className="text-labels font-semibold">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          className="w-full min-h-[100px] text-labels outline-none rounded-md border border-gray-300 p-2"
        ></textarea>
      </div>
      <AddMessageBtn />
    </div>
  );
};
export default PersonOne;
