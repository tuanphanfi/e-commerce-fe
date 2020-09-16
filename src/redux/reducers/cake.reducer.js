import * as types from "../constants/cake.constants";

const initialState = {
  cakes: [],
  loading: false,
};

const cakeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CAKE_REQUEST:
      return { ...state, loading: true };
    case types.CAKE_REQUEST_SUCCESS:
      return { ...state, cakes: payload, loading: false };
    case types.CAKE_REQUEST_FAILURE:
      console.log(payload);
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default cakeReducer;