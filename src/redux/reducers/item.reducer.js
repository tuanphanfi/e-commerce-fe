import * as types from "../constants/item.constants";

const initialState = {
  items: [],
  loading: false,
};

const itemReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.ITEM_REQUEST:
    // case types.GET_SINGLE_ITEM_REQUEST:
    case types.CREATE_ITEM_REQUEST:
    case types.UPDATE_ITEM_REQUEST:
    case types.DELETE_ITEM_REQUEST:
      return { ...state, loading: true };

    case types.ITEM_REQUEST_SUCCESS:
      return { ...state, items: payload, loading: false };

    // case types.GET_SINGLE_ITEM_REQUEST_SUCCESS:
    //   return { ...state, selectedItem: payload, loading: false };

    case types.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        selectedItem: payload,
        loading: false,
        redirectTo: "__GO_BACK__",
      };

    case types.ITEM_REQUEST_FAILURE:
    // case types.GET_SINGLE_ITEM_REQUEST_FAILURE:
    case types.CREATE_ITEM_FAILURE:
    case types.UPDATE_ITEM_FAILURE:
    case types.DELETE_ITEM_FAILURE:
      return { ...state, loading: false };

    case types.CREATE_ITEM_SUCCESS:
      return { ...state, loading: false, redirectTo: "/" };

    case types.DELETE_ITEM_SUCCESS:
      return { ...state, loading: false, selectedItem: {}, redirectTo: "/" };
    default:
      return state;
  }
};

export default itemReducer;
