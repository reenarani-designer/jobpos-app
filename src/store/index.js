import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/Auth";
import skillsReducer from "./slices/Skills";
import uiStateReducer from "./slices/UiState";

const store = configureStore({
  reducer: {
    auth: authReducer,
    skills: skillsReducer,
    uiState: uiStateReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools only in development
});

export default store;
