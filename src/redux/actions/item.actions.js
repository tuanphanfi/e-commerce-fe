import * as types from "../constants/item.constants";
import api from "../api";
import { alertActions } from "./alert.actions";

const itemsRequest = () => async (dispatch) => {
  dispatch({ type: types.ITEM_REQUEST, payload: null });
  console.log("before sending request ");
  try {
    const res = await api.get("/items");
    dispatch({
      type: types.ITEM_REQUEST_SUCCESS,
      payload: res.data.data.items,
    });
  } catch (error) {
    dispatch({ type: types.ITEM_REQUEST_FAILURE, payload: error });
  }
};

const createNewItem = (title, content, price) => async (dispatch) => {
  dispatch({ type: types.CREATE_ITEM_REQUEST, payload: null });
  try {
    const res = await api.post("/items", { title, content, price });

    dispatch({
      type: types.CREATE_ITEM_SUCCESS,
      payload: res.data.data,
    });
    dispatch(alertActions.setAlert("New item has been created!", "success"));
  } catch (error) {
    dispatch({ type: types.CREATE_ITEM_FAILURE, payload: error });
  }
};

const updateItem = (itemId, title, content) => async (dispatch) => {
  dispatch({ type: types.UPDATE_ITEM_REQUEST, payload: null });
  try {
    // let formData = new FormData();
    // formData.set("title", title);
    // formData.set("content", content);
    const res = await api.put(`/items/${itemId}`, { title, content });

    dispatch({
      type: types.UPDATE_ITEM_SUCCESS,
      payload: res.data.data,
    });
    dispatch(alertActions.setAlert("The item has been updated!", "success"));
  } catch (error) {
    dispatch({ type: types.UPDATE_ITEM_FAILURE, payload: error });
  }
};

const deleteItem = (itemId) => async (dispatch) => {
  dispatch({ type: types.DELETE_ITEM_REQUEST, payload: null });
  try {
    const res = await api.delete(`/items/${itemId}`);
    console.log(res);
    dispatch({
      type: types.DELETE_ITEM_SUCCESS,
      payload: res.data,
    });
    dispatch(alertActions.setAlert("The item has been deleted!", "success"));
  } catch (error) {
    dispatch({ type: types.DELETE_ITEM_FAILURE, payload: error });
  }
};

const setRedirectTo = (redirectTo) => ({
  type: types.SET_REDIRECT_TO,
  payload: redirectTo,
});

export const itemActions = {
  itemsRequest,
  // getSingleItem,
  createNewItem,
  updateItem,
  deleteItem,
  setRedirectTo,
};
