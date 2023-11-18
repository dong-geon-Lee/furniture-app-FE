import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  shippingInfo: null,
};

const shippingsSlice = createSlice({
  name: "shippings",
  initialState,
  reducers: {
    getShippings(state, action) {
      state.shippingInfo = action.payload;
    },
  },
});

export const { getShippings } = shippingsSlice.actions;
export default shippingsSlice.reducer;
