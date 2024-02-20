import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
const apiUrl = import.meta.env.VITE_URL;

axios.defaults.baseURL = apiUrl;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

