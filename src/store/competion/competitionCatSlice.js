import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FT_API from "../../api/api";

export const getCompetitionCategory = createAsyncThunk(
  "getCompetitionCategory",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { currentPage, pageSize } = state.competition.pagination;
      console.log(11111111111);
      const response = await FT_API.get(
        `/competitionCategories/allWithPage?pageNumber=${currentPage}&pageSize=${pageSize}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCompetitionVideos = createAsyncThunk(
  "getCompetitionVideos",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await FT_API.get(
        `/competitionCategories/one/${categoryId}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  competitionCategory: [],
  pagination: {
    currentPage: 1,
    pageSize: 5,
    totalItems: 0,
    totalPages: 1,
  },
  loading: false,
  error: "",
  competitionVideos: {},
  loading_videos: false,
  error_videos: "",
};

export const {
  actions: competitionCategoryActions,
  reducer: competitionCategoryReducers,
} = createSlice({
  name: "competition",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCompetitionCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCompetitionCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.competitionCategory = action.payload.results;
        state.pagination = action.payload.pagination;
      })
      .addCase(getCompetitionCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getCompetitionVideos.pending, (state) => {
        state.loading_videos = true;
      })
      .addCase(getCompetitionVideos.fulfilled, (state, action) => {
        state.loading_videos = false;
        state.competitionVideos = action.payload;
      })
      .addCase(getCompetitionVideos.rejected, (state, action) => {
        state.loading_videos = false;
        state.error_videos = action.payload;
      });
  },
  reducers: {
    setSelectedVideo: (state, action) => {
      state.selected_video = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = {
        ...state.pagination,
        ...action.payload,
      };
    },
  },
});

