import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// Your existing API base URL
const API_BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token; // Get token from auth state
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Fetch all books
    getBooks: builder.query({
      query: () => "/api/books",
    }),

    // Fetch a single book by ID
    getBookById: builder.query({
      query: (id) => `/api/books/${id}`,
    }),

    // Get the user account (for example, user profile data)
    getAccount: builder.query({
      query: () => "/api/account",
    }),

    // Login Mutation
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/api/users/login", // Login endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password in the request body
      }),
    }),

    // Register Mutation
    register: builder.mutation({
      query: (user) => ({
        url: "/api/users/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: user, // No need to stringify the user, RTK Query will handle it
      }),
    }),

    // PATCH: Update the availability of a book (Checkout or Return a book)
    updateBookAvailability: builder.mutation({
      query: ({ bookId, available }) => ({
        url: `/api/books/${bookId}`,
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: { available }, // Send the updated availability status
      }),
    }),

    // GET: Fetch a list of reservations for the current user
    getReservations: builder.query({
      query: () => "/api/reservations",
      // query: () => "/api/users/me",
    }),

    // DELETE: Delete a reservation (return a book)
    deleteReservation: builder.mutation({
      query: (reservationId) => ({
        url: `/api/reservations/${reservationId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useGetAccountQuery,
  useLoginMutation,
  useRegisterMutation,
  useUpdateBookAvailabilityMutation, // Export the mutation hook
  useGetReservationsQuery, // Export the query hook for fetching reservations
  useDeleteReservationMutation, // Export the mutation hook for deleting a reservation
} = api;
export default api;
// 2-6 first update
// import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// // Your existing API base URL
// const API_BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/";

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: API_BASE_URL,
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token; // Get token from auth state
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     // Fetch all books
//     getBooks: builder.query({
//       query: () => "/api/books",
//     }),

//     // Fetch a single book by ID
//     getBookById: builder.query({
//       query: (id) => `/api/books/${id}`,
//     }),

//     // Get the user account (for example, user profile data)
//     getAccount: builder.query({
//       query: () => "/api/account",
//     }),

//     // Login Mutation
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "/api/users/login",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: credentials,
//       }),
//     }),

//     // Register Mutation
//     register: builder.mutation({
//       query: (user) => ({
//         url: "/api/users/register",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: user, // No need to stringify the user, RTK Query will handle it
//       }),
//     }),

//     // PATCH: Update the availability of a book (Checkout or Return a book)
//     updateBookAvailability: builder.mutation({
//       query: ({ bookId, available }) => ({
//         url: `/api/books/${bookId}`,
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: { available }, // Send the updated availability status
//       }),
//     }),

//     // GET: Fetch a list of reservations for the current user
//     getReservations: builder.query({
//       query: () => "/api/reservations",
//     }),

//     // DELETE: Delete a reservation (return a book)
//     deleteReservation: builder.mutation({
//       query: (reservationId) => ({
//         url: `/api/reservations/${reservationId}`,
//         method: "DELETE",
//       }),
//     }),
//   }),
// });

// export const {
//   useGetBooksQuery,
//   useGetBookByIdQuery,
//   useGetAccountQuery,
//   useLoginMutation,
//   useRegisterMutation,
//   useUpdateBookAvailabilityMutation, // Export the mutation hook
//   useGetReservationsQuery, // Export the query hook for fetching reservations
//   useDeleteReservationMutation, // Export the mutation hook for deleting a reservation
// } = api;

// 2-6 working api
// import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// // Your existing API base URL
// const API_BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/";

// export const api = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: API_BASE_URL,
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token; // Get token from auth state
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     // Fetch all books
//     getBooks: builder.query({
//       query: () => "/api/books",
//     }),

//     // Fetch a single book by ID
//     getBookById: builder.query({
//       query: (id) => `/api/books/${id}`,
//     }),

//     // Get the user account (for example, user profile data)
//     getAccount: builder.query({
//       query: () => "/api/account",
//     }),

//     // Login Mutation
//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "/api/users/login",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: credentials,
//       }),
//     }),

//     // Register Mutation
//     register: builder.mutation({
//       query: (user) => ({
//         url: "/api/users/register",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: user, // No need to stringify the user, RTK Query will handle it
//       }),
//     }),

//     // PATCH: Update the availability of a book (Checkout or Return a book)
//     updateBookAvailability: builder.mutation({
//       query: ({ bookId, available }) => ({
//         url: `/api/books/${bookId}`,
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: { available }, // Send the updated availability status
//       }),
//     }),
//   }),
// });

// export const {
//   useGetBooksQuery,
//   useGetBookByIdQuery,
//   useGetAccountQuery,
//   useLoginMutation,
//   useRegisterMutation,
//   useUpdateBookAvailabilityMutation, // Export the mutation hook
// } = api;
// 2-6 starting point

// import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
// // import { booksApi } from "../../components/Books";
// const API_BASE_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/";

// export const api = createApi({
//   reducerPath: `api`,
//   baseQuery: fetchBaseQuery({
//     baseUrl: API_BASE_URL,
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth.token; // Get token from auth state
//       if (token) {
//         headers.set("Authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     getBooks: builder.query({
//       query: () => "/api/books",
//     }),
//     getBookById: builder.query({
//       query: (id) => `/api/books/${id}`,
//     }),
//     getAccount: builder.query({
//       query: () => "/api/account",
//     }),

//     login: builder.mutation({
//       query: (credentials) => ({
//         url: "/api/users/login",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: credentials,
//       }),
//     }),

//     register: builder.mutation({
//       query: (user) => ({
//         url: "/api/users/register",
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: user, // No need to stringify the user, RTK Query will handle it
//       }),
//     }),
//   }),
// });

// export const {
//   useGetBooksQuery,
//   useGetBookByIdQuery,
//   useGetAccountQuery,
//   useLoginMutation,
//   useRegisterMutation,
// } = api;

//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   tagTypes: ["Books"],
//   endpoints: (builder) => ({
//     getBooks: builder.query({
//       query: () => `/api/books`,
//     }),

//     getBook: builder.query({
//       query: (id) => `/api/books/${id}`,
//     }),

//     register: builder.mutation({
//       query: (user) => ({
//         url: "/api/users/register",
//         method: "POST",
//         body: user,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }),
//     }),
//     login: builder.mutation({
//       query: (user) => ({
//         url: `/api/users/login`,
//         method: "POST",
//         body: user,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }),
//     }),
//   }),
//   tagTypes: ["Books"],
//   endpoints: () => ({}),
// });

// export const accountApi = createApi({
//   reducerPath: "accountApi",
//   baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
//   endpoints: (builder) => ({
//     getAccount: builder.query({
//       query: () => "/account",
//     }),
//   }),
// });
// export const {
//   useGetBooksQuery,
//   useGetBookQuery,
//   useRegisterMutation,
//   useLoginMutation,
// } = booksApi;
// export const { useGetAccountQuery } = accountApi;
// export default api;
