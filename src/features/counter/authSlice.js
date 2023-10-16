import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    userSignUp: (state, action) => {
      state.isAuthenticated = true;
      state.user = [...action.payload];
    },
  },
});

export const { userLogin, userSignUp } = authSlice.actions;
export default authSlice.reducer;
