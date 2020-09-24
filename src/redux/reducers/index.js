import { combineReducers } from "redux";
import itemReducer from "./item.reducer";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";
import orderReducer from "./order.reducer";
// import userReducer from "./user.reducer";

export default combineReducers({
  item: itemReducer,
  auth: authReducer,
  alert: alertReducer,
  order: orderReducer,
  //   user: userReducer,
});
