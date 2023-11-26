import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FT_API from "../../api/api";

export const getTreningSubCatWithCateg = createAsyncThunk(
  "getTreningSubCatWithCateg",
  async (age, { rejectWithValue }) => {
    try {
      const response = await FT_API.get(
        `/trainingSubCategories/filterByCategory/${age}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  treningSubCategory: [],
  subCategory: null,
  loading: false,
  error: "",
};

export const {
  actions: treningSubCategoryActions,
  reducer: treningSubCategoryReducers,
} = createSlice({
  name: "treningSubCategory",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTreningSubCatWithCateg.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTreningSubCatWithCateg.fulfilled, (state, action) => {
        state.loading = false;
        state.treningSubCategory = action.payload; // Перезаписываем массив тренеров, так как, вероятно, это полный список
      })
      .addCase(getTreningSubCatWithCateg.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
  reducers: {
    setSubCat: (state, action) => {
      state.subCategory = action.payload;
    },
  },
});

