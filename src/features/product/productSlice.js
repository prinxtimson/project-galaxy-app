import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

const initialState = {
  products: [],
  product: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getProducts = createAsyncThunk("product/get", async (thunkAPI) => {
  try {
    return await productService.getProducts();
  } catch (err) {
    const msg =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();

    return thunkAPI.rejectWithValue(msg);
  }
});

export const saveReview = createAsyncThunk(
  "product/review",
  async (data, thunkAPI) => {
    try {
      return await productService.saveReview(data);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const getProductById = createAsyncThunk(
  "product/get-single-product",
  async (id, thunkAPI) => {
    try {
      return await productService.getProductById(id);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
    clear: (state) => {
      state.product = null;
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.product = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(saveReview.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(saveReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        let index = state.products.findIndex(
          (data) => data.id === action.payload.product_id
        );
        let product = state.product;
        product.reviews = [...product.reviews, action.payload];
        state.products.splice(index, 1, product);
        state.products = [...state.products];
        state.product = product;
      })
      .addCase(saveReview.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset, clear } = productSlice.actions;
export default productSlice.reducer;
