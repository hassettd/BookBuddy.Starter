// /* TODO - add your code to create a functional React component that renders account details for a logged in user.
// Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them
// to log in or create an account.  */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice.js";
import { useNavigate } from "react-router-dom";

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }

        return response.text().then((text) => {
          console.log("Response Body (as text):", text);
          try {
            const result = JSON.parse(text);
            setUserData(result);
            setIsLoading(false);
          } catch (err) {
            setError(
              "Failed to parse JSON or got unexpected response: " + err.message
            );
            setIsLoading(false);
          }
        });
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, [token]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/Login");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading account data: {error}</div>;

  return (
    <div>
      <h2>Account Details</h2>
      <p>First Name: {userData.firstname}</p>
      <p>Last Name: {userData.lastname}</p>
      <p>Email: {userData.email}</p>

      <h3>Your Books</h3>
      {userData.books.length > 0 ? (
        <ul>
          {userData.books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      ) : (
        <p>No books checked out</p>
      )}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Account;
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../features/authSlice.js";
// import { useNavigate } from "react-router-dom";

// function Account() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const token = useSelector((state) => state.auth.token);
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Error ${response.status}: ${response.statusText}`);
//         }

//         return response.text().then((text) => {
//           console.log("Response Body (as text):", text);
//           try {
//             const result = JSON.parse(text);
//             setUserData(result);
//             setIsLoading(false);
//           } catch (err) {
//             setError(
//               "Failed to parse JSON or got unexpected response: " + err.message
//             );
//             setIsLoading(false);
//           }
//         });
//       })
//       .catch((err) => {
//         console.error("Error fetching user data:", err);
//         setError(err.message);
//         setIsLoading(false);
//       });
//   }, [token]);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/Login");
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error loading account data: {error}</div>;

//   return (
//     <div>
//       <h2>Account Details</h2>
//       <p>First Name: {userData.firstname}</p>
//       <p>Last Name: {userData.lastname}</p>
//       <p>Email: {userData.email}</p>
//       <p>
//         Books:{" "}
//         {userData.books.length > 0
//           ? userData.books.join(", ")
//           : "No books checked out"}
//       </p>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }

// export default Account;
