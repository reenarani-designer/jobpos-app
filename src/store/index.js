import { configureStore } from "@reduxjs/toolkit";
import Auth from "./slices/Auth";

const store = configureStore({
  reducer: { auth: Auth },
});
export default store;
