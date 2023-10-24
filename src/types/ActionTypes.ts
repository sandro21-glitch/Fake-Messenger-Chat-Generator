import {
  BATTERY_VALUE,
  TOGGLE_CHECKBOX,
  TOGGLE_LAYOUT,
  UPDATE_CLOCK,
  UPDATE_NAME,
  UPDATE_IMAGE,
  UPDATE_STATUS,
} from "../actions/actions";

export type Action =
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
