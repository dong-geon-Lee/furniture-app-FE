import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICartItem, ICartState } from "../../../@types";

const initialState: ICartState = {
  cartItems: [],
  totalPrice: 0,
  shipping: 2000,
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItem>) {
      const { id, quantity, product } = action.payload;
      const { id: productId, name, price, imageURL } = product || {};

      state.cartItems.push({
        id,
        productId,
        quantity,
        name,
        price,
        imageURL,
      });
    },

    removeItem(state, action) {
      state.cartItems = action.payload;
    },

    getItems(state, action) {
      state.cartItems = action.payload;
    },

    increasePrice(state, action) {
      state.totalPrice += action.payload;
    },

    decreasePrice(state, action) {
      state.totalPrice -= action.payload;
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
} = cartsSlice.actions;
export default cartsSlice.reducer;
