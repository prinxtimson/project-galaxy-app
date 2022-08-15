import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import checkoutService from "./checkoutService";

const initialState = {
  checkout: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const saveCheckout = createAsyncThunk(
  "checkout/save",
  async (data, thunkAPI) => {
    try {
      return await checkoutService.saveCheckout(data);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const checkoutSlice = createSlice({
  name: "checkout",
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
      .addCase(saveCheckout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveCheckout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.checkout = action.payload;
      })
      .addCase(saveCheckout.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = checkoutSlice.actions;
export default checkoutSlice.reducer;
