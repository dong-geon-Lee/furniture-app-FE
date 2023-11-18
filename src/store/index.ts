import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import cartsReducer from "./features/carts/cartsSlice";
import usersReducer from "./features/users/usersSlice";
import productsReducer from "./features/products/productsSlice";
import shippingsReducer from "./features/shippings/shippingsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    carts: cartsReducer,
    products: productsReducer,
    shippings: shippingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
