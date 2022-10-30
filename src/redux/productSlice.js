import { createSlice } from '@reduxjs/toolkit';
import { api } from '../api/index';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    productsSuccess: (state, action) => {
      // eslint-disable-next-line
      state.products = action.payload;
      // eslint-disable-next-line
      state.isLoading = false;
    },
  },
});

export const productsReducer = productsSlice.reducer;

const { productsSuccess } = productsSlice.actions;
// eslint-disable-next-line
export const fetchproducts = () => async (dispatch) => {
  try {
    await api
      .get('/products')
      .then((response) => dispatch(productsSuccess(response.data)));
  } catch (e) {
    // eslint-disable-next-line
    return console.error(e.message);
  }
};
