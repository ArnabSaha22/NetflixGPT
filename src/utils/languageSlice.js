import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "languageSlice",
  initialState: {
    selectLanguage: "en",
  },
  reducers: {
    setLanguageHindi: (state, action) => {
      state.selectLanguage = action.payload;
    },
  },
});

export const { setLanguageHindi } = languageSlice.actions;
export default languageSlice.reducer;
