import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initialState from "./initailState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.status,
      };
    case COLORCHANGED:
        
    default:
      break;
  }
};
