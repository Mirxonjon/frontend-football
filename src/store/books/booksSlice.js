import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FT_API from "../../api/api";

export const getBookAllCategory = createAsyncThunk(
  "getBookAllCategory",
  async (_, { rejectWithValue }) => {
    try {
      const response = await FT_API.get(`/BooksCategories/all`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getBookWithCategory = createAsyncThunk(
  "getBookWithCategory",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { currentPage, pageSize } = state.books.pagination;
      const selectCategory = state.books.selected_category;
      const search = state.books.search;
      let url = `/Books/allWithPage?pageNumber=${currentPage}&pageSize=${pageSize}`;
      if (search.length > 0) {
        url = `/Books/filter/uz?title=${search}&pageNumber=${currentPage}&pageSize=${pageSize}`;
      } else if (selectCategory !== null) {
        url = `/Books/withCategory/allWithPage/${selectCategory}?pageNumber=${currentPage}&pageSize=${pageSize}`;
      }
      const response = await FT_API.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  bookCategory: [],
  pagination: {
    currentPage: 1,
    pageSize: 5,
    totalItems: 0,
    totalPages: 1,
  },
  loading: false,
  error: "",
  selected_category: null,
  selected_book: {},
  books: [],
  loading_books: false,
  error_books: "",
  search: "",
};

export const { actions: booksActions, reducer: booksReducers } = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBookAllCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBookAllCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.bookCategory = action.payload;
      })
      .addCase(getBookAllCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBookWithCategory.pending, (state) => {
        state.loading_books = true;
      })
      .addCase(getBookWithCategory.fulfilled, (state, action) => {
        state.loading_books = false;
        state.books = action.payload.results;
        state.pagination = action.payload.pagination;
      })
      .addCase(getBookWithCategory.rejected, (state, action) => {
        state.loading_books = false;
        state.error_books = action.payload;
      });
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selected_category = action.payload;
    },
    setSelectedBook: (state, action) => {
      state.selected_book = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setPagination: (state, action) => {
      state.pagination = {
        ...state.pagination,
        ...action.payload,
      };
    },
  },
});

