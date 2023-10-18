import { useState, useEffect } from "react";
import TextHeading from "../../ui/TextHeading";
import { useChatContext } from "../../context/ChatContext";

const Layout = () => {
  const [activeLayout, setActiveLayout] = useState<string>("android");
  const { handleActiveLayout } = useChatContext();
  const handleLayoutChange = (layout: string) => {
    setActiveLayout(layout);
  };

  useEffect(() => {
    handleActiveLayout(activeLayout);
  }, [activeLayout]);

  return (
    <div className="w-1/2">
      <TextHeading text="Layout :" />
      <div>
        <div className="flex items-center">
          <label htmlFor="android" className="text-labels cursor-pointer">
            <input
              type="radio"
              name="layout"
              id="android"
              className="mr-1"
              checked={activeLayout === "android"}
              onChange={() => handleLayoutChange("android")}
            />
            android
          </label>
        </div>
        <div className="flex items-center">
          <label htmlFor="iphone" className="text-labels cursor-pointer">
            <input
              type="radio"
              name="layout"
              id="iphone"
              className="mr-1"
              checked={activeLayout === "iphone"}
              onChange={() => handleLayoutChange("iphone")}
            />
            iphone
          </label>
        </div>
      </div>
    </div>
  );
};

export default Layout;
