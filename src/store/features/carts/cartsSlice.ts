import { createSlice } from "@reduxjs/toolkit";
import { ICartState } from "../../../@types";

const initialState: ICartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems = [...state.cartItems, action.payload];
    },

    removeItem(state, action) {
      state.cartItems = action.payload;
    },

    getItems(state, action) {
      state.cartItems = action.payload;
    },

    clearCart(state) {
      state.cartItems = [];
    },

    increasePrice(state, action) {
      console.log(action);
      state.totalPrice += action.payload;
    },

    decreasePrice(state, action) {
      state.totalPrice = state.totalPrice - action.payload;
    },

    totalCart(state, action) {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  increasePrice,
  decreasePrice,
  totalCart,
  getItems,
} = cartsSlice.actions;
export default cartsSlice.reducer;
