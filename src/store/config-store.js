import { configureStore } from "@reduxjs/toolkit";
import { langReducers } from "./slice/lang.js";
import { treningCategoryReducers } from "./trening/treningCategoriesSlice.js";
import { treningSubCategoryReducers } from "./trening/treningSubCatSlice.js";
import { competitionCategoryReducers } from "./competion/competitionCatSlice.js";

export const store = configureStore({
  reducer: {
    lang: langReducers,
    treningCategory: treningCategoryReducers,
    competition: competitionCategoryReducers,
    treningSubCategory: treningSubCategoryReducers,
  },
});
