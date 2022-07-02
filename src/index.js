import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import FavList from "./FavList";
import FavRecord from "./FavRecord";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FavList />} />
          <Route path="/fav-record" element={<FavRecord />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
