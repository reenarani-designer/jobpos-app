import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, accessToken: null, userData: null, isLoading: false },
  reducers: {
    login(state, action) {
      state.userData = action.payload.userData;
      state.isLoggedIn = (action.payload.userData) ? true : false;
    },
    logout(state) {
      state.userData = null;
      state.isLoggedIn = false;
    },
    updateUserDetails(state, action) {
      state.userData = action.payload.userData;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading
    }
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
