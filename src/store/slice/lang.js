import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "uz",
};

export const { actions: langActions, reducer: langReducers } = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});
