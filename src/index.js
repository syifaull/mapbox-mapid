import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Configs from "./configs";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={Configs.Store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
