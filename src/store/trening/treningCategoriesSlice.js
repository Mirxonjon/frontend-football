import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FT_API from "../../api/api";

export const getTreningCategory = createAsyncThunk(
  "getTreningCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await FT_API.get("/trainingCategories/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getTreningCategoryWithAge = createAsyncThunk(
  "getTreningCategoryWithAge",
  async (age, { rejectWithValue }) => {
    try {
      const response = await FT_API.get(
        `/trainingCategories/filter?age=${age}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  treningCategory: [],
  loading: false,
  error: "",
};

export const { actions: treningCategoryActions, reducer: treningCategoryReducers } =
  createSlice({
    name: "treningCategory",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(getTreningCategory.pending, (state) => {
          state.loading = true;
        })
        .addCase(getTreningCategory.fulfilled, (state, action) => {
          state.loading = false;
          state.treningCategory = action.payload; // Перезаписываем массив тренеров, так как, вероятно, это полный список
        })
        .addCase(getTreningCategory.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(getTreningCategoryWithAge.pending, (state) => {
          state.loading = true;
        })
        .addCase(getTreningCategoryWithAge.fulfilled, (state, action) => {
          state.loading = false;
          state.treningCategory = action.payload;
        })
        .addCase(getTreningCategoryWithAge.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

