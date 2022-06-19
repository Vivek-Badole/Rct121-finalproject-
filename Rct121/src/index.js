import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { FilterProvider } from "./context/FilterContext";
import { SortProvider } from "./context/Sortcontext";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <FilterProvider>
        <SortProvider>
          <App />
        </SortProvider>
      </FilterProvider>
    </Provider>
  </BrowserRouter>
);
