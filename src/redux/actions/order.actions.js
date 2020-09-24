import * as types from "../constants/order.constants";
import api from "../api";

const ordersRequest = () => async (dispatch) => {
  dispatch({ type: types.ORDER_REQUEST, payload: null });
  console.log("before sending request ");
  try {
    const res = await api.get("users/dashboard");
    dispatch({
      type: types.ORDER_REQUEST_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    dispatch({ type: types.ORDER_REQUEST_FAILURE, payload: error });
  }
};

export const orderActions = {
  ordersRequest,
};
