import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, contactsApi, setToken } from "../../config/contactsApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await contactsApi.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkApi) => {
    try {
      const { data } = await contactsApi.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkApi) => {
  try {
    await contactsApi.post("users/logout");
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
