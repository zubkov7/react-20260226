import { configureStore } from "@reduxjs/toolkit";
import { headphonesSlice } from "./entities/headphones/slice";
import { reviewsSlice } from "./entities/reviews/slice";
import { codecsSlice } from "./entities/codecs/slice";
import { usersSlice } from "./entities/users/slice";
import { cartSlice } from "./entities/cart/slice";
import { api } from "./services/api/api";

const loggerMiddleware = (store) => (next) => (action) => {
  console.log(action);

  return next(action);
};

export const store = configureStore({
  reducer: {
    [headphonesSlice.name]: headphonesSlice.reducer,
    [reviewsSlice.name]: reviewsSlice.reducer,
    [codecsSlice.name]: codecsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware, api.middleware),
});
