import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FT_API from "../../api/api";

export const getTrener = createAsyncThunk(
  "getTrener",
  async (_, { rejectWithValue }) => {
    try {
      const response = await FT_API.get("/trainingCategories/all");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  treners: [],
  loading: false,
  error: "",
};

export const { actions: trenersActions, reducer: trenersReducers } =
  createSlice({
    name: "treners",
    initialState,
    extraReducers: (builder) => {
      builder
        .addCase(getTrener.pending, (state) => {
          state.loading = true;
        })
        .addCase(getTrener.fulfilled, (state, action) => {
          state.loading = false;
          state.treners = action.payload; // Перезаписываем массив тренеров, так как, вероятно, это полный список
        })
        .addCase(getTrener.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });

