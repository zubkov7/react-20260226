import { configureStore } from "@reduxjs/toolkit";
import { headphoneSlice } from "./entities/headphones/slice";
import { reviewSlice } from "./entities/reviews/slice";
import { cartSlice } from "./entities/cart/slice";

export const store = configureStore({
  reducer: {
    [headphoneSlice.name]: headphoneSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
  },
});
