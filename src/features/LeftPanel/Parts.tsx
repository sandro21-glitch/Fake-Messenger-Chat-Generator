import { useState, useEffect } from "react";
import { useChatContext } from "../../context/ChatContext";
import TextHeading from "../../ui/TextHeading";
import { ViewTypes } from "../../types/ViewTypes";

const Parts = ({ activeView }: ViewTypes) => {
  const { state, handleActiveParts } = useChatContext();
  const { parts } = state;
  const { activeNow, hideHeader, hideFooter } = parts;
  const [activePart, setActivePart] = useState({
    activeNow,
    hideHeader,
    hideFooter,
  });
  useEffect(() => {
    handleActiveParts(activePart);
  }, [activePart]);
  return (
    <div className="w-1/2">
      <TextHeading text="Parts :" />
      <div className="flex items-center">
        <label htmlFor="active" className="text-labels cursor-pointer">
          <input
            type="checkbox"
            id="active"
            className="mr-1"
            checked={activePart.activeNow}
            onChange={(e) =>
              setActivePart({ ...activePart, activeNow: e.target.checked })
            }
          />
          Active Now
        </label>
      </div>
      {activeView === "desktop" ? null : (
        <div className="flex items-center">
          <label htmlFor="header" className="text-labels cursor-pointer">
            <input
              type="checkbox"
              id="header"
              className="mr-1"
              checked={activePart.hideHeader}
              onChange={(e) =>
                setActivePart({ ...activePart, hideHeader: e.target.checked })
              }
            />
            Hide Header
          </label>
        </div>
      )}

      <div className="flex items-center">
        <label htmlFor="footer" className="text-labels cursor-pointer">
          <input
            type="checkbox"
            id="footer"
            className="mr-1"
            checked={activePart.hideFooter}
            onChange={(e) =>
              setActivePart({ ...activePart, hideFooter: e.target.checked })
            }
          />
          Hide Footer
        </label>
      </div>
    </div>
  );
};
export default Parts;
