import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const editLang = createAsyncThunk(
    'editLang',
    async (args, { rejectWithValue }) => {
    //   const response = await fetch('http://localhost:3000/users');
  
      try {
        return args;
      } catch (error) {
        return rejectWithValue(error);
      }
    },
  );

const initialState = {
    loading: false,
    lang: 'Uz',
    error: null,
  };

export const { actions: langActionst, reducer: langReducers } = createSlice({
    name: 'lang',
    initialState,
    // reducers: {
    //   sortUser: (state, action) => {
    //     state.users = action.payload;
    //   },
    // },
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
    //   [createUser.pending]: (state) => {
    //     state.loading = true;
    //   },
    //   [createUser.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.users.push(action.payload);
    //     state.dateForSort.push(action.payload);
    //   },
    //   [createUser.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.message;
    //   },
    //   [deleteUser.pending]: (state) => {
    //     state.loading = true;
    //   },
    //   [deleteUser.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     const { id } = action.payload;
    //     if (id) {
    //       state.users = state.users.filter((e) => e.id !== id);
    //       state.dateForSort = state.dateForSort.filter((e) => e.id !== id);
    //     }
    //   },
    //   [deleteUser.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   },
    //   [updateUser.pending]: (state) => {
    //     state.loading = true;
    //   },
    //   [updateUser.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.users = state.users.map((e) =>
    //       e.id === action.payload.id ? action.payload : e,
    //     );
    //     state.dateForSort = state.dateForSort.map((e) =>
    //       e.id === action.payload.id ? action.payload : e,
    //     );
    //   },
    //   [updateUser.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.message;
    //   },
    },
  });
  