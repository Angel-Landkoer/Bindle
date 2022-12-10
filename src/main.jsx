// React
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";

// React Route
import { BrowserRouter } from "react-router-dom";

// Components
import App from "./App";

// Styles
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
);
