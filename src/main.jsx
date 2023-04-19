import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./css/index.css";
import { WeatherContextProvider } from "./store/weather-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <WeatherContextProvider>
    <div className="bg-dark-blue flex min-h-screen">
      <App />
    </div>
  </WeatherContextProvider>
);
