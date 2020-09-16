import { combineReducers } from "redux";
import cakeReducer from "./cake.reducer";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";

export default combineReducers({
  cake: cakeReducer,
  auth: authReducer,
  alert: alertReducer,
});
