import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  accessToken: null,
  userData: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      const { userData } = action.payload;
      state.userData = userData;
      state.isLoggedIn = !!userData; // Double negation to ensure it's a boolean
    },
    logout(state) {
      localStorage.removeItem("jbToken");
      state.userData = null;
      state.isLoggedIn = false;
    },
    updateUserDetails(state, action) {
      state.userData = action.payload.userData;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
