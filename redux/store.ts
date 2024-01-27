import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
