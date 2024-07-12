import { createSlice } from "@reduxjs/toolkit";

const SkillSlice = createSlice({
  name: "skills",
  initialState: { skills: [], isLoading: false },
  reducers: {
    setSkills(state, action) {
      state.skills = action.payload.skills;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const skillsAction = SkillSlice.actions;
export default SkillSlice.reducer;
