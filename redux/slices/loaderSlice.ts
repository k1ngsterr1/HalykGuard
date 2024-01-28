import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    isLoading: true,
  },
  reducers: {
    toggleOnLoader: (state) => {
      state.isLoading = true;
    },
    toggleOffLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const { toggleOffLoader, toggleOnLoader } = loaderSlice.actions;

export default loaderSlice.reducer;
