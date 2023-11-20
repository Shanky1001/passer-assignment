import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./features/UserSlice";

export const Store = configureStore({
  reducer: {
    userState: UserSlice.reducer,
  },
});
