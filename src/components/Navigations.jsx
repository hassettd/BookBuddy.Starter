/* TODO - add your code to create a functional React component that renders 
a navigation bar for the different views in your single page application.
 You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from "react-router-dom";
// import { Books } from "/components/Books";
// import { SingleBook } from "/components/SingleBook";

function Navigations() {
  return (
    <div>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/Books">Books</Link>
          </li>
          <li className="nav-item">
            <Link to="/SingleBook">Book</Link>
          </li>
          <li className="nav-item">
            <Link to="/Register">Register</Link>
          </li>
          <li className="nav-item">
            <Link to="Account">Account</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigations;
