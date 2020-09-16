import * as types from "../constants/cake.constants";
import api from "../api";

const cakesRequest = () => async (dispatch) => {
  dispatch({ type: types.CAKE_REQUEST, payload: null });
  try {
    const res = await api.get("/cakes");
    dispatch({ type: types.CAKE_REQUEST_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.CAKE_REQUEST_FAILURE, payload: error });
  }
};

export const cakeActions = {
  cakesRequest,
};