import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Account from "./components/Account";
import Authenticate from "./components/Authenticate";
import Books from "./components/Books";
import Login from "./components/Login";
import Navigations from "./components/Navigations";
import Register from "./components/Register";
import SingleBook from "./components/SingleBook";

import bookLogo from "./assets/books.png";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Authenticate token={token} setToken={setToken} />
      <Register token={token} setToken={setToken} />
      <h1>
        <img id="logo-image" src={bookLogo} />
        Library App
      </h1>

      <p>
        Complete the React components needed to allow users to browse a library
        catalog, check out books, review their account, and return books that
        they've finished reading.
      </p>

      <p>
        You may need to use the `token` in this top-level component in other
        components that need to know if a user has logged in or not.
      </p>

      <p>
        Don't forget to set up React Router to navigate between the different
        views of your single page application!
      </p>
      <div id="container">
        <div id="navbar">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/Account">Account</Link>
            </li>

            <li className="nav-item">
              <Link to="/Books">Books</Link>
            </li>
            <li className="nav-item">
              <Link to="/SingleBook">
                <SingleBook></SingleBook>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>

        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}
