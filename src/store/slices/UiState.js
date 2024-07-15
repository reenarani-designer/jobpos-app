import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotification: false,
  notificationType: null,
  isLoading: false,
  message: null,
  isError: false,
};

const uiStateSlice = createSlice({
  name: "uistate",
  initialState,
  reducers: {
    setIsNotification(state, action) {
      const { isNotification, message, notificationType } = action.payload;
      state.isNotification = isNotification;
      state.message = message;
      state.notificationType = notificationType;
    },
  },
});

export const uiStateAction = uiStateSlice.actions;
export default uiStateSlice.reducer;
