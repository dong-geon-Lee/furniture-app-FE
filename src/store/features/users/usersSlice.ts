import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const currentToken = JSON.parse(localStorage.getItem("token") || "{}");

const initialState: any = {
  isLoading: false,
  user: null,
  error: false,
  token: currentToken,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.user = action.payload;
      state.error = false;
    },

    loginUser(state, action) {
      state.token = action.payload;
    },

    updateUser(state, aciton: PayloadAction<any>) {
      state.user = aciton.payload;
    },

    deleteUser(state, action: PayloadAction<number>) {
      state.user = action.payload;
    },
  },
});

export const { getUser, updateUser, deleteUser, loginUser } =
  usersSlice.actions;
export default usersSlice.reducer;
