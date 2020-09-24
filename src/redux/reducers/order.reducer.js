import * as types from "../constants/order.constants";

const initialState = {
  items: [],
  loading: false,
  cart: [],
  orders: [],
};

const itemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ORDER_REQUEST:
      return { ...state, loading: true };

    case types.ORDER_REQUEST_SUCCESS:
      return { ...state, orders: payload.orders, loading: false };

    case types.ORDER_REQUEST_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default itemReducer;
