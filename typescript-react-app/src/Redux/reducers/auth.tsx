import { Action } from "redux";
import { LOG_IN,LOG_OUT } from "../actions/types";
  export const loginReducer = (state = false, action:Action) => {
    switch (action.type) {
      case LOG_IN:
        return true;
      case LOG_OUT:
        return false;
      default:
        return state;
    }
  }
  