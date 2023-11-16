import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addItem(state, action) {
      state.products.push({});
    },

    removeItem(state, action) {
      state.products = action.payload;
    },

    getProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const { addItem, removeItem } = productsSlice.actions;
export default productsSlice.reducer;
