import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false, accessToken: null, userId: null },
  reducers: {
    login(state) {},
    logout(state) {},
  },
});

export const authActions = AuthSlice.actions;
export default AuthSlice.reducer;
