import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-dark-blue flex min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);
