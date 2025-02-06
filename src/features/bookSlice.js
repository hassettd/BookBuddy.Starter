import { createSlice } from "@reduxjs/toolkit";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    books: [], // List of books
    currentBook: null, // For a single book detail (optional)
  },
  reducers: {
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setCurrentBook: (state, action) => {
      state.currentBook = action.payload;
    },
    updateBookAvailability: (state, action) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload; // Update the book in the list
      }
    },
  },
});

export const { setBooks, setCurrentBook, updateBookAvailability } =
  bookSlice.actions;

export default bookSlice.reducer;

// 2-6 starting point

// import { createSlice } from "@reduxjs/toolkit";

// const bookSlice = createSlice({
//   name: "books",
//   initialState: {
//     books: [],
//   },
//   reducers: {
//     setBooks: (state, action) => {
//       state.books = action.payload;
//     },
//   },
// });

// export const { setBooks } = bookSlice.actions;

// export default bookSlice.reducer;

// // src/assets/App/booksSlice.js

// import { booksApi } from `./App/api`;
// import { createSlice } from "@reduxjs/toolkit";

// const userApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getUser: builder.query({
//       query: (id) => ({
//         url: `/user/${id}`,
//         method: "GET",
//       }),
//       providesTags: ["Books"],
//     }),
//     updateUser: builder.mutation({
//       query: ({ id, email }) => ({
//         url: `/books/${id}`,
//         method: "PUT",
//         body: {
//           email,
//         },
//       }),
//       providesTags: ["Books"],
//     }),
//   }),
// });

// export const { useGetBookQuery, useUpdateBookMutation } = api;
// export default api;
