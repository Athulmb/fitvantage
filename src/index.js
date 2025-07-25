import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // ✅ This is necessary to activate Tailwind
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
