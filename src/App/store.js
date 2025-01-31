import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import BookSlice from "../components/BookSlice";

export const store = configureStore({
  reducer: {
    api: api.reducer,
    books: BookSlice,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(api.middleware),
});
