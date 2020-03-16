import { combineReducers } from "redux";
import mobileReducer from "./mobileReducer";

const rootReducer = combineReducers({ useMobileReducer: mobileReducer });

export default rootReducer;
