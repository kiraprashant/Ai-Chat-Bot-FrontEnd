import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
import ChatSlices from "../Slices/ChatSlices"
import UserSlice from "../Slices/UserSlices"

export const store = configureStore({
  reducer: {
     ChatData: ChatSlices,
     UserData: UserSlice,
  },
});

export default store