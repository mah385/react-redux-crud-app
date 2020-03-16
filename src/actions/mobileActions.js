import { ADD_NEW_MOBILE } from "./actionTypes";
import * as URLPathConstant from "../URLPathConstant";

export const addNewMobile = (newMobile, history) => dispatch => {
  dispatch({
    type: ADD_NEW_MOBILE,
    payload: newMobile
  });
  history.push(URLPathConstant.SHOW_ALL_MOBILES_URL_PATH);
};
