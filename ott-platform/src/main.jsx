import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ScrollIngToTop from "./components/ScrollIngToTop.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollIngToTop />
    <App />
  </BrowserRouter>
);
