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
      debugger;
      state.isAuthenticated = true;
      state.user = action.payload;
    },

    userSignUp: (state, action) => {
      state.user = [...action.payload];
    },

    userloggedOut: (state) => {
      debugger;
      state.isAuthenticated = false;
    },
  },
});

export const { userLogin, userSignUp, userloggedOut } = authSlice.actions;
export default authSlice.reducer;
