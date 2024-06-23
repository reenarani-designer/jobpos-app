import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, accessToken: null, userData: null },
  reducers: {
    login(state, action) {
      state.userData = action.payload.userData;
      state.isLoggedIn = true;
    },
    logout(state) {
      state.userData = null;
      state.isLoggedIn = false;
    },
    updateUserDetails(state, action) {
      state.userData = action.payload.userData;
    },
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
