import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { chat_reducer } from "../reducers/chat_reducer";
import StateTypes from "../types/StateTypes";
import { TOGGLE_CHECKBOX, TOGGLE_LAYOUT } from "../actions/actions";
type ChatContextType = {
  state: StateTypes;
  dispatch: React.Dispatch<any>;
  handleActiveParts: (parts: {
    activeNow: boolean;
    hideHeader: boolean;
    hideFooter: boolean;
  }) => void;
  handleActiveLayout: (layout: string) => void;
};
const ChatProvider = createContext<ChatContextType | null>(null);

const initialState: StateTypes = {
  personOne: ["test", "stedfafe", "faf"],
  personTwo: ["f", "fs", "test", "faaw"],
  parts: {
    activeNow: true,
    hideHeader: false,
    hideFooter: false,
  },
  layout: "android",
  battery: "50",
  img: "",
  name: "",
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

  return (
    <ChatProvider.Provider
      value={{ state, dispatch, handleActiveParts, handleActiveLayout }}
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
