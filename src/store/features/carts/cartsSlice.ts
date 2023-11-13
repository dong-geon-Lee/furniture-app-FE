import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "../../../@types";

const initialState: ICartState = {
  cartItems: [],
  totalPrice: 0,
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItem>) {
      const { id, quantity, product } = action.payload;
      const { id: productId, name, price, imageURL } = product || {};

      state.cartItems = [
        ...state.cartItems,
        {
          id,
          productId: productId,
          quantity,
          name,
          price,
          imageURL,
        },
      ];
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
  getItems,
  addItem,
  removeItem,
  increasePrice,
  decreasePrice,
  totalCart,
  clearCart,
} = cartsSlice.actions;
export default cartsSlice.reducer;
