// // 206 starting point
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setToken, setError, setLoading } from "./bookSlice.js";

// function Authenticate() {
//   const dispatch = useDispatch();
//   const {
//     token: storedToken,
//     loading,
//     error,
//   } = useSelector((state) => state.auth);
//   const [token, setTokenState] = useState(storedToken || "");

//   async function handleClick() {
//     dispatch(setLoading(true));
//     dispatch(setError(null));

//     try {
//       const response = await fetch("/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({}),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       const result = await response.json();
//       console.log(result);

//       if (result.success) {
//         dispatch(setToken({ token: result.token }));
//       } else {
//         throw new Error(result.message || "Authentication failed");
//       }
//     } catch (err) {
//       dispatch(setError(err.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   }

//   return (
//     <div>
//       <h2>Authenticate</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {loading ? (
//         <p>Authenticating...</p>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Enter token"
//             value={token}
//             onChange={(e) => setTokenState(e.target.value)}
//           />
//           <button onClick={handleClick}>Authenticate Token!</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Authenticate;

// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setToken, setError, setLoading } from "./bookSlice.js";

// function Authenticate() {
//   const dispatch = useDispatch();
//   const {
//     token: storedToken,
//     loading,
//     error,
//   } = useSelector((state) => state.auth);
//   const [token, setTokenState] = useState(storedToken || "");

//   async function handleClick() {
//     dispatch(setLoading(true));
//     dispatch(setError(null));

//     try {
//       const response = await fetch("/api/users/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({}),
//       });

//       if (!response.ok) {
//         throw new Error("Login failed");
//       }

//       const result = await response.json();
//       console.log(result);

//       if (result.success) {
//         dispatch(setToken({ token: result.token }));
//       } else {
//         throw new Error(result.message || "Authentication failed");
//       }
//     } catch (err) {
//       dispatch(setError(err.message));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   }

//   return (
//     <div>
//       <h2>Authenticate</h2>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {loading ? (
//         <p>Authenticating...</p>
//       ) : (
//         <>
//           <input
//             type="text"
//             placeholder="Enter token"
//             value={token}
//             onChange={(e) => setTokenState(e.target.value)}
//           />
//           <button onClick={handleClick}>Authenticate Token!</button>
//         </>
//       )}
//     </div>
//   );
// }

// export default Authenticate;

// import { useState } from "react";
// function Authenticate({ token }) {
//   const [successMessage, setSuccessMessage] = useState(null);
//   const [error, setError] = useState(null);

//   async function handleClick() {
//     console.log(token);
//     try {
//       const response = await fetch("/api/users", {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({}),
//       });
//       const result = await response.json();
//       console.log(result);
//       setSuccessMessage(result.message);
//     } catch (error) {
//       setError(error.message);
//     }
//   }

//   return (
//     <div>
//       <h2>Authenticate</h2>
//       {successMessage && <p>{successMessage}</p>}
//       {error && <p>{error}</p>}
//       <button onClick={handleClick}>Authenticate Token!</button>
//     </div>
//   );
// }
// export default Authenticate;
