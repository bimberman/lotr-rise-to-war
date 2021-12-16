import { APP_PAGES } from "../constants/default";
import { ADD_NEW_PAGE } from "../constants/actionTypes";

const initialState = {
  history: [0],
  currentPageIndex: 0,
};

function navigationReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case ADD_NEW_PAGE:
      return {
        ...state,
        history: [...state.history, payload],
        currentPageIndex: payload,
      };
    default:
      return { ...state };
  }
}

export default navigationReducer;
