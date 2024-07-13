import { configureStore } from "@reduxjs/toolkit";
import Auth from "./slices/Auth";
import Skills from "./slices/Skills";
import UiState from "./slices/UiState";

const store = configureStore({
  reducer: { auth: Auth, skills: Skills, UiState: UiState },
});
export default store;
