import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store.js"; // Make sure the path to the store is correct
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Get the root DOM element (this is where your app will be mounted)
const root = document.getElementById("root");

// Use createRoot to render the app
const rootElement = ReactDOM.createRoot(root); // Create a root using createRoot

rootElement.render(
  // Use render from createRoot instead of ReactDOM.render
  <Provider store={store}>
    <App />
  </Provider>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./assets/App/store"; // Make sure the path to the store is correct
// import "./index.css";

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
// import React from "react";
// import ReactDOM from "react-dom";
// // import App from "@components/App";
// import App from "./App";

// import "./index.css";
// ReactDOM.render(<App />, document.getElementById("root"));

// import React from "react";
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
