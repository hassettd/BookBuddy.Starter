import "./Index.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Authenticate from "./components/Authenticate";
import Books from "./components/Books";
import Login from "./components/Login";
import Navigations from "./components/Navigations";
import Register from "./components/Register";

import SingleBook from "./components/SingleBook";
import { store } from "./App/store";
import { Provider } from "react-redux";
import bookLogo from "./assets/books.png";

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <Router>
        <Navigations />
        <Authenticate token={token} setToken={setToken} />
        <Register token={token} setToken={setToken} />
        <h1>
          <img id="logo-image" src={bookLogo} />
          Library App
        </h1>

        <p>
          Complete the React components needed to allow users to browse a
          library catalog, check out books, review their account, and return
          books that they've finished reading.
        </p>

        <p>
          You may need to use the `token` in this top-level component in other
          components that need to know if a user has logged in or not.
        </p>

        <p>
          Don't forget to set up React Router to navigate between the different
          views of your single page application!
        </p>
        <Provider store={store}>
          <Routes>
            <Route path="/Account" element={<Account />} />
            <Route path="/Books" element={<Books />} />
            <Route path="/SingleBook" element={<SingleBook />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Provider>
      </Router>
      {Books &&
        Books.map((SingleBook) => {
          console.log(SingleBook);
        })}
    </>
  );
}
export default App;
