import { ADD_NEW_MOBILE } from "../actions/actionTypes";
// import { listOfMobiles } from "./mobileData"; //sample data of mobiles

const initialState = {
  singleMobile: {},
  listOfMobiles: [] //for sample data of mobiles we can write as listOfMobiles: listOfMobiles
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MOBILE:
      return {
        ...state,
        listOfMobiles: state.listOfMobiles.concat(action.payload)
      };

    default:
      return state;
  }
};

export default mobileReducer;
