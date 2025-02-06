// /* TODO - add your code to create a functional React component that renders a registration form */
import React, { useState } from "react";
import { useRegisterMutation } from "../services/api";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { isLoading, error, data }] = useRegisterMutation();
  const [registerError, setRegisterError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register({ username, email, password }).unwrap();
    } catch (err) {
      console.error("Registration failed:", err);
      setRegisterError(err.message || "Registration failed");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Register</h1>
      <form onSubmit={handleRegister} className="needs-validation" noValidate>
        {/* Username Input */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        {/* Email Input */}
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
            required
          />
        </div>

        {/* Password Input */}
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
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={isLoading}
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>

      {/* Error Message */}
      {registerError && (
        <div className="alert alert-danger mt-3" role="alert">
          {registerError}
        </div>
      )}

      {/* Success Message */}
      {data && (
        <div className="alert alert-success mt-3" role="alert">
          Registration Successful! Welcome, {data.username}!
        </div>
      )}
    </div>
  );
}

export default Register;

// keep this working version
// import React, { useState } from "react";
// import { useRegisterMutation } from "../services/api"; // Assuming useRegisterMutation is coming from RTK Query

// function Register() {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [register, { isLoading, error, data }] = useRegisterMutation();
//   const [registerError, setRegisterError] = useState(null); // For handling API errors

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     // Call the mutation function
//     try {
//       await register({ username, email, password }).unwrap(); // .unwrap() helps to catch any errors from the API
//     } catch (err) {
//       console.error("Registration failed:", err);
//       setRegisterError(err.message || "Registration failed");
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       <form onSubmit={handleRegister}>
//         <div>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Registering..." : "Register"}
//         </button>
//       </form>
//       {registerError && <p style={{ color: "red" }}>{registerError}</p>}{" "}
//       {/* Display error if any */}
//       {data && <p>Registration Successful! Welcome, {data.username}!</p>}{" "}
//       {/* Display success message */}
//     </div>
//   );
// }

// export default Register;
