import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./userSlice";
import ChatSlices from "../Slices/ChatSlices"

export const store = configureStore({
  reducer: {
     ChatData: ChatSlices,
  },
});

export default store