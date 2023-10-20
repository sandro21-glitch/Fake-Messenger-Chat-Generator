import StateTypes from "../types/StateTypes";
import {
  BATTERY_VALUE,
  TOGGLE_CHECKBOX,
  TOGGLE_LAYOUT,
  UPDATE_CLOCK,
  UPDATE_NAME,
  PERSON_ONE_MESSAGE,
  PERSON_TWO_MESSAGE,
  UPDATE_IMAGE,
  UPDATE_STATUS,
} from "../actions/actions";

// action types
type Action =
  | {
      type: typeof TOGGLE_LAYOUT;
      payload: string;
    }
  | {
      type: typeof TOGGLE_CHECKBOX;
      payload: {
        activeNow: boolean;
        hideHeader: boolean;
        hideFooter: boolean;
      };
    }
  | {
      type: typeof BATTERY_VALUE;
      payload: number;
    }
  | {
      type: typeof UPDATE_CLOCK;
      payload: string;
    }
  | {
      type: typeof UPDATE_NAME;
      payload: string;
    }
  | {
      type: typeof UPDATE_IMAGE;
      payload: string;
    }
  | {
      type: typeof UPDATE_STATUS;
      payload: string;
    };

//reducer
export const chat_reducer = (state: StateTypes, action: Action) => {
  if (action.type === TOGGLE_CHECKBOX) {
    const payload = action.payload as {
      activeNow: boolean;
      hideHeader: boolean;
      hideFooter: boolean;
    };
    return {
      ...state,
      parts: {
        ...state.parts,
        ...payload,
      },
    };
  }
  if (action.type === TOGGLE_LAYOUT) {
    return { ...state, layout: action.payload as string };
  }
  if (action.type === BATTERY_VALUE) {
    return { ...state, battery: action.payload as number };
  }
  if (action.type === UPDATE_CLOCK) {
    return { ...state, clock: action.payload as string };
  }
  if (action.type === UPDATE_NAME) {
    return { ...state, name: action.payload as string };
  }
  if (action.type === PERSON_ONE_MESSAGE) {
    const newMessage = action.payload as string;
    const updatedPersonOne = [...state.personOne, newMessage];
    const updatedAllMessages = [
      ...state.allMessages,
      { from: "PersonOne", text: newMessage },
    ];

    return {
      ...state,
      personOne: updatedPersonOne,
      allMessages: updatedAllMessages,
    };
  }

  if (action.type === PERSON_TWO_MESSAGE) {
    const newMessage = action.payload as string;
    const updatedPersonTwo = [...state.personTwo, newMessage];
    const updatedAllMessages = [
      ...state.allMessages,
      { from: "PersonTwo", text: newMessage },
    ];

    return {
      ...state,
      personTwo: updatedPersonTwo,
      allMessages: updatedAllMessages,
    };
  }
  if (action.type === UPDATE_IMAGE) {
    return { ...state, img: action.payload as string };
  }
  if (action.type === UPDATE_STATUS) {
    const updatedStatus = { sent: false, delivered: false, seen: false };

    switch (action.payload) {
      case "sent":
        updatedStatus.sent = true;
        break;
      case "delivered":
        updatedStatus.delivered = true;
        break;
      case "seen":
        updatedStatus.seen = true;
        break;
      default:
        break;
    }

    return {
      ...state,
      status: {
        ...state.status,
        ...updatedStatus,
      },
    };
  }
  return state;
};
