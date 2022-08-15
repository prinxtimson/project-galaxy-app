import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";

const initialState = {
  profile: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getProfile = createAsyncThunk("profile/get", async (thunkAPI) => {
  try {
    return await profileService.getProfile();
  } catch (err) {
    const msg =
      (err.response && err.response.data && err.response.data.message) ||
      err.message ||
      err.toString();

    return thunkAPI.rejectWithValue(msg);
  }
});

export const updateProfile = createAsyncThunk(
  "profile/update",
  async (data, thunkAPI) => {
    try {
      return await profileService.updateProfile(data);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const addCard = createAsyncThunk(
  "profile/add-card",
  async (data, thunkAPI) => {
    try {
      return await profileService.addCard(data);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const removeCard = createAsyncThunk(
  "profile/remove-card",
  async (data, thunkAPI) => {
    try {
      return await profileService.removeCard(data);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const addAddress = createAsyncThunk(
  "profile/add-address",
  async (data, thunkAPI) => {
    try {
      return await profileService.addAddress(data);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const removeAddress = createAsyncThunk(
  "profile/remove-address",
  async (data, thunkAPI) => {
    try {
      return await profileService.removeAddress(data);
    } catch (err) {
      const msg =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();

      return thunkAPI.rejectWithValue(msg);
    }
  }
);

export const profileSlice = createSlice({
  name: "profile",
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
      .addCase(getProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
        state.message = "Profile updated successfuly";
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
        state.message = "Card added successfully";
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
        state.message = "Card remove successfully";
      })
      .addCase(removeCard.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(addAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
        state.message = "Address added successfully";
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeAddress.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeAddress.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.profile = action.payload;
        state.message = "Address remove successfully";
      })
      .addCase(removeAddress.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
