import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../services/api";
import { setCredentials, setError, setLoading } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();
  console.log("Login Mutation State:", { isLoading, error });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));

    try {
      console.log("Login Request:", { email, password });

      const response = await login({ email, password });

      console.log("Full Login Response:", response);

      if (response && response.data && response.data.token) {
        const { token } = response.data;
        console.log("Token:", token);

        localStorage.setItem("token", token);
        dispatch(setCredentials({ token }));

        navigate("/books");
      } else {
        throw new Error("Invalid login response structure.");
      }
    } catch (err) {
      console.error("Login error:", err);
      dispatch(setError(err.message || "Login failed"));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}
    </div>
  );
}

export default Login;
//2nd working version
// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useLoginMutation } from "../services/api"; // RTK Query mutation
// import { setCredentials, setError, setLoading } from "../features/authSlice";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [login, { isLoading, error }] = useLoginMutation();
//   console.log("Login Mutation State:", { isLoading, error }); // RTK Query for login

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     dispatch(setLoading(true));

//     try {
//       console.log("Login Request:", { email, password });

//       const response = await login({ email, password });

//       console.log("Full Login Response:", response); // Inspect response

//       // Here we are getting the response properly, now check the structure
//       if (response && response.data && response.data.token) {
//         const { token } = response.data; // Only destructure token from response
//         console.log("Token:", token);

//         // Assuming that you may want to handle user details separately, for now just the token
//         dispatch(setCredentials({ token })); // Store token in Redux

//         navigate("/books"); // Redirect after successful login
//       } else {
//         throw new Error("Invalid login response structure.");
//       }
//     } catch (err) {
//       console.error("Login error:", err);
//       dispatch(setError(err.message || "Login failed"));
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };
//   return (
//     <div className="container mt-5">
//       <h2 className="text-center mb-4">Login</h2>
//       <form onSubmit={handleSubmit} className="needs-validation" noValidate>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             className="form-control"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary w-100"
//           disabled={isLoading}
//         >
//           {isLoading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//       {error && (
//         <div className="alert alert-danger mt-3" role="alert">
//           {error}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Login;
