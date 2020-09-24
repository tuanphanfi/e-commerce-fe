import axios from "axios";
import store from "./store";
import { alertActions } from "./actions/alert.actions";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    return request;
  },
  function (error) {
    console.log("RESPONSE ERROR", error);
    store.dispatch(alertActions.setAlert(error.message, "danger"));
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("RESPONSE ERROR", error);
    let errorMsg = error.message || error;
    if (error.errors && error.errors.message)
      errorMsg = errorMsg + ": " + error.errors.message;
    store.dispatch(alertActions.setAlert(errorMsg, "danger"));
    return Promise.reject(error);
  }
);

export default api;
