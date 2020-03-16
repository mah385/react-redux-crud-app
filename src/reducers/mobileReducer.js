import {
  ADD_NEW_MOBILE_IN_REDUX,
  DELETE_EXISTING_MOBILE_BY_ID_FROM_REDUX,
  SET_EXISTING_MOBILE_IN_REDUX_FOR_UPDATING,
  UPDATE_EXISTING_MOBILE_IN_REDUX
} from "../actions/actionTypes";
import { listOfMobiles } from "./mobileData"; //sample data of mobiles

const initialState = {
  singleMobile: {},
  listOfMobiles: listOfMobiles //for sample data of mobiles we can write as listOfMobiles: listOfMobiles
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MOBILE_IN_REDUX:
      return {
        ...state,
        listOfMobiles: state.listOfMobiles.concat(action.payload)
      };

    case SET_EXISTING_MOBILE_IN_REDUX_FOR_UPDATING:
      return {
        ...state,
        singleMobile: action.payload
      };

    //Approach 1 for updating Mobile where insertion order is maintained
    case UPDATE_EXISTING_MOBILE_IN_REDUX:
      let tempListOfMobiles = [...state.listOfMobiles];
      const foundIndex = tempListOfMobiles.findIndex(mobile => {
        return mobile.id === action.payload.id;
      });
      tempListOfMobiles[foundIndex] = action.payload;
      return {
        ...state,
        listOfMobiles: tempListOfMobiles
      };

    //Approach 2 for updating Mobile where insertion order is NOT maintained
    /*case UPDATE_EXISTING_MOBILE_IN_REDUX:
      let tempListOfMobiles = [...state.listOfMobiles];
      tempListOfMobiles = tempListOfMobiles.filter(mobile => {
        return mobile.id !== action.payload.id;
      });
      return {
        ...state,
        listOfMobiles: tempListOfMobiles.concat(action.payload)
      };*/

    case DELETE_EXISTING_MOBILE_BY_ID_FROM_REDUX:
      let filteredListOfMobiles = [...state.listOfMobiles];
      filteredListOfMobiles = filteredListOfMobiles.filter(mobile => {
        return mobile.id !== action.payload;
      });
      return {
        ...state,
        listOfMobiles: filteredListOfMobiles
      };

    default:
      return state;
  }
};

export default mobileReducer;
