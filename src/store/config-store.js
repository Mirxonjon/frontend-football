import { configureStore } from "@reduxjs/toolkit";
import { langReducers } from "./slice/lang.js";
import { trenersReducers } from "./trener/trenerSlice.js";

export const store = configureStore({
  reducer: {
    lang: langReducers,
    treners: trenersReducers,
  },
});
