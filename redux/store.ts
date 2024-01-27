import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import userReducer from "./slices/userSlice";
import loadingReducer from "./slices//loaderSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    firstName: userReducer,
    loading: loadingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
