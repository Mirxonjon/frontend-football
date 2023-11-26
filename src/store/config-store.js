import { configureStore } from "@reduxjs/toolkit";
import { langReducers } from "./slice/lang.js";
import { treningCategoryReducers } from "./trening/treningCategoriesSlice.js";
import { treningSubCategoryReducers } from "./trening/treningSubCatSlice.js";

export const store = configureStore({
  reducer: {
    lang: langReducers,
    treningCategory: treningCategoryReducers,
    treningSubCategory: treningSubCategoryReducers
  },
});
