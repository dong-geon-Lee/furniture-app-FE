import { createSlice } from "@reduxjs/toolkit";
import { ICartState } from "../../../@types";

export interface ICartItem {
  id: number;
  name: string;
  price: string;
  imageURL: string;
}

const initialState: ICartState = {
  cartItems: [],
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems.push(action.payload);
    },

    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartsSlice.actions;
export default cartsSlice.reducer;
