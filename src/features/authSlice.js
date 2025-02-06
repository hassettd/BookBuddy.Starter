import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token; // Store token here
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null; // Clear token on logout
    },
  },
});

export const { setCredentials, setLoading, setError, logout } =
  authSlice.actions;

export default authSlice.reducer;
// 2-6 first try, semi functional but not passing the token
// import { createSlice } from "@reduxjs/toolkit";

// // Initial state for authSlice
// const initialState = {
//   token: null,
//   user: null,
//   loading: false, // Track loading state
//   error: null, // Track error message
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     // Set user credentials (token and user data)
//     setCredentials: (state, action) => {
//       state.token = action.payload.token;
//       state.user = action.payload.user;
//     },

//     // Log out by clearing user data and token
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//     },

//     // Set loading state (true or false)
//     setLoading: (state, action) => {
//       state.loading = action.payload;
//     },

//     // Set error message (for failed requests)
//     setError: (state, action) => {
//       state.error = action.payload;
//     },
//   },
// });

// // Export actions for dispatching
// export const { setCredentials, logout, setLoading, setError } =
//   authSlice.actions;

// // Export the reducer to be used in store
// export default authSlice.reducer;

// 2-6 starting point
// import { createSlice } from "@reduxjs/toolkit";
// import { useLoginMutation, useRegisterMutation } from "../services/api";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     token: null,
//     user: null,
//   },
//   reducers: {
//     setCredentials: (state, action) => {
//       state.token = action.payload.token;
//       state.user = action.payload.user;
//     },
//     logout: (state) => {
//       state.token = null;
//       state.user = null;
//     },
//   },
// });

// export const { setCredentials, logout } = authSlice.actions;

// export default authSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: null,
//   token: localStorage.getItem("token") || null, // Retrieve token from localStorage
//   loading: false,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       localStorage.setItem("token", action.payload.token); // Store token in localStorage
//       state.loading = false;
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       localStorage.removeItem("token"); // Remove token from localStorage
//     },
//     setLoading: (state) => {
//       state.loading = true;
//     },
//     setError: (state, action) => {
//       state.error = action.payload;
//       state.loading = false;
//     },
//   },
// });

// export const { login, logout, setLoading, setError } = authSlice.actions;
// export default authSlice.reducer;
