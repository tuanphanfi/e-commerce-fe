import { combineReducers } from "redux";
import itemReducer from "./item.reducer";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";
// import userReducer from "./user.reducer";

export default combineReducers({
  item: itemReducer,
  auth: authReducer,
  alert: alertReducer,
  //   user: userReducer,
});
