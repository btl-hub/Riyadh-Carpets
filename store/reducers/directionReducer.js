import { CHANGE_DIR, FETCH_DIRECTION } from "../types/directionTypes";

const initialState = {
  direction: "rtl",
  arabic: true,
};

export default function directionReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_DIR:
      return {
        direction: action.payload,
        arabic: !state.arabic,
      };

    case FETCH_DIRECTION:
      return {
        direction: action.payload,
        arabic: action.payload === "rtl" ? true : false,
      };

    default:
      return state;
  }
}
