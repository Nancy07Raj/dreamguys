import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appslice";

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});
store.subscribe(() =>
  localStorage.setItem("state", JSON.stringify(store.getState()))
);

export default store;
