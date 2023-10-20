import { useState, useEffect } from "react";
import PersonOneForm from "./PersonOneForm";
import { useChatContext } from "../../../context/ChatContext";
const PersonOne = () => {
  const { updatePersonImage } = useChatContext();
  const [profileImage, setProfileImage] = useState<string>(
    () => localStorage.getItem("image") || "/profile.png"
  );
  //handle the event when a user uploads an image file.
  const handleImageUpload = (e: React.FormEvent<EventTarget>): void => {
    const inputElement = e.target as HTMLInputElement;
    const file = inputElement?.files?.[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      localStorage.setItem("image", imageUrl);
    }
  };
  useEffect(() => {
    updatePersonImage(profileImage);
  }, [profileImage]);

  return (
    <div className="border border-gray-300 px-2">
      {/* profile photo upload */}
      <div className="p-5 flex  items-center">
        <div className="w-1/2 flex  justify-center">
          <div className="border p-1 rounded-sm w-[50px] h-[50px]">
            <img
              src={profileImage}
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
          <input
            type="file"
            name="uploadfile"
            id="img"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
        </div>
      </div>
      <PersonOneForm />
    </div>
  );
};
export default PersonOne;
