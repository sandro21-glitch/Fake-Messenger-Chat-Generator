import StateTypes from "../types/StateTypes";
import { TOGGLE_CHECKBOX, TOGGLE_LAYOUT } from "../actions/actions";

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
  return state;
};
