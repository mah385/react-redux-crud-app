import {
  ADD_NEW_MOBILE_IN_REDUX,
  DELETE_EXISTING_MOBILE_BY_ID_FROM_REDUX,
  SET_EXISTING_MOBILE_IN_REDUX_FOR_UPDATING,
  UPDATE_EXISTING_MOBILE_IN_REDUX
} from "./actionTypes";
import * as URLPathConstant from "../URLPathConstant";

export const addNewMobileInRedux = (newMobile, history) => dispatch => {
  dispatch({
    type: ADD_NEW_MOBILE_IN_REDUX,
    payload: newMobile
  });
  history.push(URLPathConstant.SHOW_ALL_MOBILES_URL_PATH);
};

export const setExistingMobileInReduxForUpdating = (
  existingMobile,
  history
) => dispatch => {
  dispatch({
    type: SET_EXISTING_MOBILE_IN_REDUX_FOR_UPDATING,
    payload: existingMobile
  });
  history.push(URLPathConstant.UPDATE_MOBILE_URL_PATH);
};

export const updateExistingMobileInRedux = (
  updatedExistingMobile,
  history
) => dispatch => {
  dispatch({
    type: UPDATE_EXISTING_MOBILE_IN_REDUX,
    payload: updatedExistingMobile
  });
  history.push(URLPathConstant.SHOW_ALL_MOBILES_URL_PATH);
};

export const deleteExistingMobileByIdFromRedux = mobileId => dispatch => {
  dispatch({
    type: DELETE_EXISTING_MOBILE_BY_ID_FROM_REDUX,
    payload: mobileId
  });
};
