// import React from "react";
// import { Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// const PrivateRoute = ({ element, ...rest }) => {
//   const token = useSelector((state) => state.auth.token);

//   return token ? (
//     <Route {...rest} element={element} />
//   ) : (
//     <Navigate to="/Login" />
//   );
// };

// export default PrivateRoute;
//   return token ? (
//     <Route
//       {...rest}
//       element={token ? element : <Navigate to="/login" replace />}
//     />
//   );
// };

// export default PrivateRoute;
