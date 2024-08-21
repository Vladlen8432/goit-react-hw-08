import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./operation";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
// export default authSlice.reducer;

// const initialState = {
//   user: {
//     name: "",
//     email: "",
//   },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };

// const slice = createSlice({
//   name: "auth",
//   initialState,
// });

// export const authReducer = slice.reducer;
