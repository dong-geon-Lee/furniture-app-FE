import { createSlice } from "@reduxjs/toolkit";
import { IProductsProps } from "../../../@types";

const initialState: IProductsProps = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },

    addProduct(state, action) {
      state.products.push(action.payload);
    },

    removeProduct(state, action) {
      state.products = action.payload;
    },

    updateProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const { getProducts, addProduct, removeProduct, updateProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
