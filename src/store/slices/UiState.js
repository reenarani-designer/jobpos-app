import { createSlice } from "@reduxjs/toolkit";
const UiStateSlice = createSlice({
  name: "uistate",
  initialState: {
    isNotification: false,
    notificationType: null,
    isLoading: false,
    message: null,
    isError: false,
  },
  reducers: {
    setIsNotification(state, action) {
      state.isNotification = action.payload.isNotification;
      state.message = action.payload.message;
      state.notificationType = action.payload.notificationType;
    },
  },
});

export const uiStateAction = UiStateSlice.actions;
export default UiStateSlice.reducer;
