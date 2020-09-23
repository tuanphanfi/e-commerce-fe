import * as types from "../constants/auth.constants";
import { ADD_ITEM_TO_CART_SUCCESS } from "../constants/item.constants";
import api from "../api";
import { alertActions } from "./alert.actions";

const loginRequest = (email, password) => async (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login", { email, password });
    dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.data }); //dispatch: set || useSelector: get
    const name = res.data.data.user.name;
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
    dispatch(alertActions.setAlert(`Welcome back, ${name}`, "success"));
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: res.data.data.user.cart,
    });
  } catch (error) {
    dispatch({ type: types.LOGIN_FAILURE, payload: error });
  }
};

const logOut = () => (dispatch) => {
  dispatch({ type: types.LOG_OUT });
};

const register = (name, email, password) => async (dispatch) => {
  dispatch({ type: types.REGISTER_REQUEST, payload: null });
  try {
    const res = await api.post("/users", { name, email, password });
    dispatch({ type: types.REGISTER_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.REGISTER_FAILURE, payload: error });
  }
};

const loginFacebookRequest = (access_token) => async (dispatch) => {
  dispatch({ type: types.LOGIN_FACEBOOK_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login/facebook", { access_token });
    const name = res.data.data.user.name;
    dispatch(alertActions.setAlert(`Welcome ${name}`, "success"));
    dispatch({ type: types.LOGIN_FACEBOOK_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: res.data.data.user.cart,
    });
  } catch (error) {
    dispatch({ type: types.LOGIN_FACEBOOK_FAILURE, payload: error });
  }
};

const loginGoogleRequest = (access_token) => async (dispatch) => {
  dispatch({ type: types.LOGIN_GOOGLE_REQUEST, payload: null });
  try {
    const res = await api.post("/auth/login/google", { access_token });
    const name = res.data.data.user.name;
    dispatch(alertActions.setAlert(`Welcome ${name}`, "success"));
    dispatch({ type: types.LOGIN_GOOGLE_SUCCESS, payload: res.data.data });
    api.defaults.headers.common["authorization"] =
      "Bearer " + res.data.data.accessToken;
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: res.data.data.user.cart,
    });
  } catch (error) {
    dispatch({ type: types.LOGIN_GOOGLE_FAILURE, payload: error });
  }
};

const getCurrentUser = (accessToken) => async (dispatch) => {
  dispatch({ type: types.GET_CURRENT_USER_REQUEST, payload: null });
  if (accessToken) {
    const bearerToken = "Bearer " + accessToken;
    api.defaults.headers.common["authorization"] = bearerToken;
  }
  try {
    const res = await api.get("/users/me");
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: res.data.data });
    dispatch({
      type: ADD_ITEM_TO_CART_SUCCESS,
      payload: res.data.data.user.cart,
    });
  } catch (error) {
    dispatch({ type: types.GET_CURRENT_USER_FAILURE, payload: error });
  }
};
export const authActions = {
  loginRequest,
  register,
  logOut,
  loginFacebookRequest,
  loginGoogleRequest,
  getCurrentUser,
};
