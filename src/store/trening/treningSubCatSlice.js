import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FT_API from "../../api/api";

export const getTreningSubCatWithCateg = createAsyncThunk(
  "getTreningSubCatWithCateg",
  async (id, { rejectWithValue }) => {
    try {
      const response = await FT_API.get(
        `/trainingSubCategories/filterByCategory/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getVideoWithSubCat = createAsyncThunk(
  "getVideoWithSubCat",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { subCategory } = state.treningSubCategory;
      const response = await FT_API.get(
        `/TrainingVideos/filterBySubCategory/${subCategory}`
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
  videos: [],
  loading_video: false,
  error_video: "",
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
        state.treningSubCategory = action.payload;
        if (action.payload.length > 0) {
          state.subCategory = action.payload[0].id;
        }
      })
      .addCase(getTreningSubCatWithCateg.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getVideoWithSubCat.pending, (state) => {
        state.loading_video = true;
      })
      .addCase(getVideoWithSubCat.fulfilled, (state, action) => {
        state.loading_video = false;
        state.videos = action.payload;
      })
      .addCase(getVideoWithSubCat.rejected, (state, action) => {
        state.loading_video = false;
        state.error_video = action.payload;
      });
  },
  reducers: {
    setSubCat: (state, action) => {
      state.subCategory = action.payload;
    },
  },
});

