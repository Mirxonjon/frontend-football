import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const editLang = createAsyncThunk(
  "editLang",
  async (args, { rejectWithValue }) => {
    //   const response = await fetch('http://localhost:3000/users');

    try {
      return args;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  loading: false,
  lang: "Uz",
  error: null,
};

export const { actions: langActionst, reducer: langReducers } = createSlice({
  name: "lang",
  initialState,
  extraReducers: {
    [editLang.pending]: (state) => {
      state.loading = true;
    },
    [editLang.fulfilled]: (state, action) => {
      state.loading = false;
      state.lang = action.payload;
    },
    [editLang.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
