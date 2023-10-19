import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { chat_reducer } from "../reducers/chat_reducer";
import StateTypes from "../types/StateTypes";
const getLocalStorage = (): string => {
  const storedImage = localStorage.getItem("image");
  return storedImage || ""; // Return an empty string if the value is not found
};
import {
  BATTERY_VALUE,
  PERSON_ONE_MESSAGE,
  PERSON_TWO_MESSAGE,
  TOGGLE_CHECKBOX,
  TOGGLE_LAYOUT,
  UPDATE_CLOCK,
  UPDATE_NAME,
  UPDATE_IMAGE,
} from "../actions/actions";
type ChatContextType = {
  state: StateTypes;
  dispatch: React.Dispatch<any>;
  handleActiveParts: (parts: {
    activeNow: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
  }) => void;
  handleActiveLayout: (layout: string) => void;
  updateBatteryValue: (value: number) => void;
  updateClockValue: (value: string) => void;
  updateName: (value: string) => void;
  addPersonOneMessage: (message: string) => void;
  addPersonTwoMessage: (message: string) => void;
  updatePersonImage: (imagePath: string) => void;
};
const ChatProvider = createContext<ChatContextType | null>(null);

const initialState: StateTypes = {
  allMessages: [
    { from: "PersonOne", text: "Hi 👋" },
    { from: "PersonTwo", text: "Hi" },
  ],
  personOne: [],
  personTwo: [],
  parts: {
    activeNow: true,
    hideHeader: false,
    hideFooter: false,
  },
  layout: "android",
  battery: 50,
  img: getLocalStorage(),
  name: "",
  clock: "",
};

const ChatContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chat_reducer, initialState);
  const handleActiveParts = (updatedParts: {
    activeNow: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
  }): void => {
    dispatch({ type: TOGGLE_CHECKBOX, payload: updatedParts });
  };
  const handleActiveLayout = (layout: string): void => {
    dispatch({ type: TOGGLE_LAYOUT, payload: layout });
  };
  const updateBatteryValue = (value: number): void => {
    dispatch({ type: BATTERY_VALUE, payload: value });
  };
  const updateClockValue = (value: string): void => {
    dispatch({ type: UPDATE_CLOCK, payload: value });
  };
  const updateName = (name: string): void => {
    dispatch({ type: UPDATE_NAME, payload: name });
  };
  const addPersonOneMessage = (message: string): void => {
    dispatch({ type: PERSON_ONE_MESSAGE, payload: message });
  };
  const addPersonTwoMessage = (message: string): void => {
    dispatch({ type: PERSON_TWO_MESSAGE, payload: message });
  };
  const updatePersonImage = (imagePath: string): void => {
    dispatch({ type: UPDATE_IMAGE, payload: imagePath });
  };

  return (
    <ChatProvider.Provider
      value={{
        state,
        dispatch,
        handleActiveParts,
        handleActiveLayout,
        updateBatteryValue,
        updateClockValue,
        updateName,
        addPersonOneMessage,
        addPersonTwoMessage,
        updatePersonImage,
      }}
    >
      {children}
    </ChatProvider.Provider>
  );
};

export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatProvider);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export default ChatContext;
