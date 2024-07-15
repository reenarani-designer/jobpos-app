import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  skills: [],
  isLoading: false,
};

const skillSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    setSkills(state, action) {
      state.skills = action.payload.skills;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const skillsAction = skillSlice.actions;
export default skillSlice.reducer;
