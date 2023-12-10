import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Modal } from "././folders/components/Modal/Modal.jsx";
import { BrowserRouter } from "react-router-dom";
import { MyContextProvider } from "./folders/hooks/MyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyContextProvider>
      <React.StrictMode>
        <App>
          <Modal />
        </App>
      </React.StrictMode>
    </MyContextProvider>
  </BrowserRouter>
);
