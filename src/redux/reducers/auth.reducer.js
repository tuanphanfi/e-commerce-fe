import * as types from "../constants/auth.constants";
const initialState = {
  user: {},
  isAuthenticated: undefined,
  loading: false,
  accessToken: localStorage.getItem("accessToken"),
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.LOGIN_REQUEST:
    case types.LOGIN_FACEBOOK_REQUEST:
    case types.LOGIN_GOOGLE_REQUEST:
    case types.REGISTER_REQUEST:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
    case types.LOGIN_FACEBOOK_SUCCESS:
    case types.LOGIN_GOOGLE_SUCCESS:
      localStorage.setItem("accessToken", payload.accessToken);
      return {
        ...state,
        user: { ...payload.user },
        accessToken: payload.accessToken,
        loading: false,
        isAuthenticated: true,
      };

    case types.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: { ...payload.user },
        loading: false,
        isAuthenticated: true,
      };
    case types.LOGIN_FAILURE:
    case types.LOGIN_FACEBOOK_FAILURE:
    case types.LOGIN_GOOGLE_FAILURE:
    case types.GET_CURRENT_USER_FAILURE:
    case types.REGISTER_FAILURE:
      return { ...state, loading: false, isAuthenticated: false };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case types.LOG_OUT:
      localStorage.removeItem("accessToken");
      return {
        ...initialState,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default authReducer;
