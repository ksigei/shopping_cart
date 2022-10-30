import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    productsSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

export const productsReducer = productsSlice.reducer;


const { productsSuccess } = productsSlice.actions;

export const fetchproducts = () => async (dispatch) => {
  try {
    await api
      .get("/products")
      .then((response) => dispatch(productsSuccess(response.data)));
  } catch (e) {
    return console.error(e.message);
  }
};
