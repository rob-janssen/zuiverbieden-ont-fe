import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-center"
      autoClose={3000}
      pauseOnFocusLoss={false}
      pauseOnHover={false}
    />
  </StrictMode>
);
