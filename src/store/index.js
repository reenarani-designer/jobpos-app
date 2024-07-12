import { configureStore } from "@reduxjs/toolkit";
import Auth from "./slices/Auth";
import Skills from "./slices/Skills";

const store = configureStore({
  reducer: { auth: Auth, skills: Skills },
});
export default store;
