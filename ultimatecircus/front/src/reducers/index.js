import { combineReducers } from "redux";
import authReducer from "./authReducer";
import ShoppReducer from "./ShoppReducer";

export default combineReducers({
  auth: authReducer,
  shop: ShoppReducer
});
