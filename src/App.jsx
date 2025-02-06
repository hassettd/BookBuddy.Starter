import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Reservations from "./components/Reservations";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Navigation from "./components/Navigation";
import Books from "./components/Books";
import Account from "./components/Account";
import Login from "./components/Login";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}
// function App() {
//   const [token, setToken] = useState(null);
//   const booksToRender = Books || []; // Default to an empty array if Books
//   // is null/undefined
//   return (
//     <>
//       <Router>
//         <Navigation />
//         <Authenticate token={token} setToken={setToken} />
//         <Register token={token} setToken={setToken} />
//         <h1>
//           <img id="logo-image" src={bookLogo} />
//           Library App
//         </h1>

//         <p>
//           Complete the React components needed to allow users to browse a
//           library catalog, check out books, review their account, and return
//           books that they've finished reading.
//         </p>

//         <p>
//           You may need to use the `token` in this top-level component in other
//           components that need to know if a user has logged in or not.
//         </p>

//         <p>
//           Don't forget to set up React Router to navigate between the different
//           views of your single page application!
//         </p>
//         <Provider store={store}>
//           <Routes>
//             <Route path="/Account" element={<Account />} />
//             <Route path="/Books" element={<Books />} />
//             <Route path="/books/${id}" element={<SingleBook />} />
//             <Route path="/Register" element={<Register />} />
//           </Routes>
//         </Provider>
//       </Router>
//       ReactDOM.render(
//       <Provider store={store}>
//         <App />
//       </Provider>
//       , document.getElementById("root") );
//       {Books &&
//         Books.map((SingleBook, index) => {
//           console.log(SingleBook);
//           return (
//             <div key={index}>
//               <h3>{SingleBook.title}</h3>
//               <p>{SingleBook.author}</p>
//             </div>
//           );
//         })}
//       {booksToRender.map((SingleBook, index) => {
//         console.log(SingleBook);
//         return (
//           <div key={index}>
//             <h3>{SingleBook.title}</h3>
//             <p>{SingleBook.author}</p>
//           </div>
//         );
//       })}
//       {Books?.length > 0 ? (
//         Books.map((SingleBook, index) => {
//           console.log(SingleBook);
//           return (
//             <div key={index}>
//               <h3>{SingleBook.title}</h3>
//               <p>{SingleBook.author}</p>
//             </div>
//           );
//         })
//       ) : (
//         <p>No books available or loading...</p>
//       )}
//       {/* {Books &&
//           Books.map((SingleBook) => {
//             console.log(SingleBook);
//           })} */}
//     </>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom"; // Import Navigate
// import { fetchBooks } from "./assets/services/booksSlice";
// import Navigations from "./components/Navigations";
// import Books from "./components/Books";
// import SingleBook from "./components/SingleBook";
// import Register from "./components/Register";
// import Account from "./components/Account";
// import Login from "./components/Login";
// import bookLogo from "./assets/books.png";

// function App() {
//   const [token] = useState(null);
//   const dispatch = useDispatch();

//   const { books, loading, error } = useSelector((state) => state.books);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   return (
//     <Router>
//       <Navigations />
//       <h1>
//         <img id="logo-image" src={bookLogo} alt="Logo" />
//         Library App
//       </h1>

//       {loading && <p>Loading books...</p>}
//       {error && <p>Error: {error}</p>}

//       <Routes>
//         {/* Redirect from the root path */}
//         <Route path="/" element={<Navigate to="/login" />} />{" "}
//         {/* Redirect to /login */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />
//         <Route path="/books/:id" element={<SingleBook />} />
//         {/* <PrivateRoute path="/Books" element={<Books books={books} />} /> */}
//         {/* <PrivateRoute path="/Account" element={<Account />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { fetchBooks } from "./assets/App/booksSlice";
// import { logout } from "./assets/App/authSlice";
// import Navigations from "./components/Navigations";
// import Books from "./components/Books";
// import SingleBook from "./components/SingleBook";
// import Register from "./components/Register";
// import Account from "./components/Account";
// import Login from "./components/Login";
// // import PrivateRoute from "./components/PrivateRoute";
// import bookLogo from "./assets/books.png";

// function App() {
//   // const [token, setToken] = useState(null);
//   const [token] = useState(null);
//   const dispatch = useDispatch();

//   const { books, loading, error } = useSelector((state) => state.books);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   return (
//     <Router>
//       <Navigations />
//       <h1>
//         <img id="logo-image" src={bookLogo} alt="Logo" />
//         Library App
//       </h1>

//       {loading && <p>Loading books...</p>}
//       {error && <p>Error: {error}</p>}

//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/Register" element={<Register />} />
//         {/* <PrivateRoute path="/Books" element={<Books books={books} />} />
//         <PrivateRoute path="/Account" element={<Account />} /> */}
//         <Route path="/books/:id" element={<SingleBook />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { fetchBooks } from "./assets/App/booksSlice";
// import { logout } from "./assets/App/authSlice";
// import Navigations from "./components/Navigations";
// import Books from "./components/Books";
// import SingleBook from "./components/SingleBook";
// import Register from "./components/Register";
// import Account from "./components/Account";
// import Login from "./components/Login";
// import PrivateRoute from "./components/PrivateRoute";
// import { Provider } from "react-redux";
// import store from "./assets/App/store";
// import bookLogo from "./assets/books.png";

// function App() {
//   const [token, setToken] = useState(null);
//   const dispatch = useDispatch();

//   const { books, loading, error } = useSelector((state) => state.books);

//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   return (
//     <Provider store={store}>
//       <Router>
//         <Navigations />
//         <h1>
//           <img id="logo-image" src={bookLogo} alt="Logo" />
//           Library App
//         </h1>

//         {loading && <p>Loading books...</p>}
//         {error && <p>Error: {error}</p>}

//         <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/Register" element={<Register />} />
//           <PrivateRoute path="/Books" element={<Books books={books} />} />
//           <PrivateRoute path="/Account" element={<Account />} />
//           <Route path="/books/:id" element={<SingleBook />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { fetchBooks, removeBook } from "./assets/App/booksSlice";
// import Navigations from "./components/Navigations";
// import Books from "./components/Books";
// import SingleBook from "./components/SingleBook";
// import Register from "./components/Register";
// import Account from "./components/Account";
// import { Provider } from "react-redux";
// import store from "./assets/App/store";
// import bookLogo from "./assets/books.png";

// function App() {
//   const [token, setToken] = useState(null);
//   const dispatch = useDispatch();

//   // Accessing books, loading state, and error from Redux store
//   const { books, loading, error } = useSelector((state) => state.books);

//   // Fetch books when the app loads
//   useEffect(() => {
//     dispatch(fetchBooks());
//   }, [dispatch]);

//   return (
//     <Provider store={store}>
//       <Router>
//         <Navigations />
//         <h1>
//           <img id="logo-image" src={bookLogo} alt="Logo" />
//           Library App
//         </h1>

//         {loading && <p>Loading books...</p>}
//         {error && <p>Error: {error}</p>}

//         <Routes>
//           <Route path="/Account" element={<Account />} />
//           <Route
//             path="/Books"
//             element={<Books books={books} removeBook={removeBook} />}
//           />
//           <Route path="/books/:id" element={<SingleBook />} />
//           <Route path="/Register" element={<Register />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;

// // import React from "react";
// // import ReactDOM from "react-dom";

// // import "./Index.css";
// // import { useState } from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Account from "./components/Account";
// // import Authenticate from "./components/Authenticate";
// // import Books from "./components/Books";
// // import Login from "./components/Login";
// // import Navigations from "./components/Navigations";
// // import Register from "./components/Register";

// // import SingleBook from "./components/SingleBook";
// // import store from "./assets/App/store";
// // import { Provider } from "react-redux";
// // import bookLogo from "./assets/books.png";

// // function App() {
// //   const [token, setToken] = useState(null);
// //   const booksToRender = Books || []; // Default to an empty array if Books
// //   // is null/undefined
// //   return (
// //     <>
// //       <Router>
// //         <Navigations />
// //         <Authenticate token={token} setToken={setToken} />
// //         <Register token={token} setToken={setToken} />
// //         <h1>
// //           <img id="logo-image" src={bookLogo} />
// //           Library App
// //         </h1>

// //         <p>
// //           Complete the React components needed to allow users to browse a
// //           library catalog, check out books, review their account, and return
// //           books that they've finished reading.
// //         </p>

// //         <p>
// //           You may need to use the `token` in this top-level component in other
// //           components that need to know if a user has logged in or not.
// //         </p>

// //         <p>
// //           Don't forget to set up React Router to navigate between the different
// //           views of your single page application!
// //         </p>
// //         <Provider store={store}>
// //           <Routes>
// //             <Route path="/Account" element={<Account />} />
// //             <Route path="/Books" element={<Books />} />
// //             <Route path="/books/${id}" element={<SingleBook />} />
// //             <Route path="/Register" element={<Register />} />
// //           </Routes>
// //         </Provider>
// //       </Router>
// //       ReactDOM.render(
// //       <Provider store={store}>
// //         <App />
// //       </Provider>
// //       , document.getElementById("root") );
// //       {Books &&
// //         Books.map((SingleBook, index) => {
// //           console.log(SingleBook);
// //           return (
// //             <div key={index}>
// //               <h3>{SingleBook.title}</h3>
// //               <p>{SingleBook.author}</p>
// //             </div>
// //           );
// //         })}
// //       {booksToRender.map((SingleBook, index) => {
// //         console.log(SingleBook);
// //         return (
// //           <div key={index}>
// //             <h3>{SingleBook.title}</h3>
// //             <p>{SingleBook.author}</p>
// //           </div>
// //         );
// //       })}
// //       {Books?.length > 0 ? (
// //         Books.map((SingleBook, index) => {
// //           console.log(SingleBook);
// //           return (
// //             <div key={index}>
// //               <h3>{SingleBook.title}</h3>
// //               <p>{SingleBook.author}</p>
// //             </div>
// //           );
// //         })
// //       ) : (
// //         <p>No books available or loading...</p>
// //       )}
// //       {/* {Books &&
// //         Books.map((SingleBook) => {
// //           console.log(SingleBook);
// //         })} */}
// //     </>
// //   );
// // }
// // export default App;
