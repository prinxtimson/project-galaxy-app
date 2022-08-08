import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import favoriteService from "./favoriteService";

const initialState = {
  favorites: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addOrRemove = createAsyncThunk(
  "favorite/add-or-remove",
  async (data, thunkAPI) => {
    try {
      return await favoriteService.addOrRemove(data);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addOrRemove.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addOrRemove.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        let index = state.favorites.findIndex(
          (val) => val.id === action.payload.id
        );
        if (index > 0) {
          state.favorites.splice(index, 1);
          state.favorites = [...state.favorites];
        } else {
          state.favorites = [...state.favorites, action.payload];
        }
      })
      .addCase(addOrRemove.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = favoriteSlice.actions;
export default favoriteSlice.reducer;
