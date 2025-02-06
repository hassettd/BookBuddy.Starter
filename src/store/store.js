import { configureStore } from "@reduxjs/toolkit";
import { api } from "../services/api";
import authReducer from "../features/authSlice";
import bookReducer from "../features/bookSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    books: bookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import booksApi from "../App/api";
// import BookSlice from "../../components/BookSlice.js";
// import authReducer from "../../components/AuthSlice";
// import accountApi from "../App/api";
// const store = configureStore({
//   reducer: {
//     [booksApi.reducerPath]: booksApi.reducer,
//     auth: authReducer,
//     [accountApi.reducerPath]: accountApi.reducer,
//     books: BookSlice,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(booksApi.middleware, accountApi.middleware),
// });

// export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import { booksApi } from "./App/api";
// import BookSlice from "../../components/BookSlice.js";
// import authReducer from '../features/auth/AuthSlice';
// import { accountApi } from `./api`;

// const store = configureStore({
//   reducer: {
//   [booksApi.reducerPath]: booksApi.reducer,
//   auth: authReducer,
//   [accountApi.reducerPath]: accountApi.reducer,
// },

//   middleware: (getDefaultMiddleWare) =>
//   getDefaultMiddleWare().concat(booksApi.middleware),
//   getDefaultMiddleware().concat(accountApi.middleware),
// });
// export default store;
