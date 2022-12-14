import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setLoggedIn, setToken } = authSlice.actions;

export default authSlice.reducer;
