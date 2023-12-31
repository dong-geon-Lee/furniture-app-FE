import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  orders: [],
  orderInfo: {},
};

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders(state, action) {
      state.orders = action.payload;
    },

    getOrderInfo(state, action) {
      state.orderInfo = action.payload;
    },
  },
});

export const { getOrders, getOrderInfo } = ordersSlice.actions;
export default ordersSlice.reducer;
