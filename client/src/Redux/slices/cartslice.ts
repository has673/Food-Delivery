import { createSlice } from '@reduxjs/toolkit';

const cartslice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCartStart(state) {
      state.loading = true;
      state.error = null;
    },
    addToCartSuccess(state, action) {
      state.loading = false;
      state.items = action.payload;
    },
    addToCartFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addToCartStart, addToCartSuccess, addToCartFailure } = cartslice.actions;

export default cartslice.reducer;

// Thunk action creator for adding item to cart
export const addToCart = (productId, quantity) => async (dispatch) => {
  dispatch(addToCartStart());
  
  try {
    const response = await fetch(`/api/cart/${productId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ quantity }),
    });

    if (!response.ok) {
      throw new Error('Failed to add item to cart');
    }

    const data = await response.json();
    dispatch(addToCartSuccess(data));
  } catch (error) {
    dispatch(addToCartFailure(error.message));
  }
};
