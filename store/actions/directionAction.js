import { CHANGE_DIR, FETCH_DIRECTION } from "../types/directionTypes";

export const changeDirection = (arabic) => async (dispatch) => {
  // console.log(arabic);
  const direction = arabic ? "ltr" : "rtl";
  localStorage.setItem("lang", direction);
  // document.cookie = "lang=ar";
  console.log(direction);
  dispatch({
    type: CHANGE_DIR,
    payload: direction,
  });
};

export const fetchDirection = (direction) => (dispatch) => {
  // const direction = localStorage.getItem("lang");
  //  let newDirection =  direction === "rtl" ? "rlt" : "ltr"
  // console.log(direction);
  dispatch({
    type: FETCH_DIRECTION,
    payload: direction,
  });
};
