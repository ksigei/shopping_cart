import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api/index";

// Slice

const productsSlice = createSlice({
  name: "products",
  initialState: {
    // products: [{id: 1, title: 'men', image: 'sdd', price: 22}],
    products: [],
  },
  reducers: {
    productsSuccess: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

// export default productsSlice.reducer;
export const productsReducer = productsSlice.reducer;

// Actions

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
