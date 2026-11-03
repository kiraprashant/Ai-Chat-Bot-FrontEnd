
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../cmp/Auth/Intance";

// Fetch user profile
export const GetProfileBYID = createAsyncThunk(
  "User/GetProfileBYID",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/ChatRoom/profile");
      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.msg || "Failed to fetch profile"
      );
    }
  }
);

const initialState = {
  User: null,
  Loading: false,
  Error: null,
};

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    ClearUser: (state) => {
      state.User = null;
      state.Loading = false;
      state.Error = null;
    },
    UpdateUser: (state, action) => {
      if (state.User) {
        state.User = {
          ...state.User,
          ...action.payload,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetProfileBYID.pending, (state) => {
        state.Loading = true;
        state.Error = null;
      })
      .addCase(GetProfileBYID.fulfilled, (state, action) => {
        state.Loading = false;
        state.User = action.payload;
      })
      .addCase(GetProfileBYID.rejected, (state, action) => {
        state.Loading = false;
        state.Error = action.payload || "Something went wrong";
      });
  },
});

export const { ClearUser, UpdateUser } = UserSlice.actions;
export default UserSlice.reducer;
