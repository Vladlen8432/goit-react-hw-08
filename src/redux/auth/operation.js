import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactsApi } from "../../config/contactsApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkApi) => {
    try {
      const { data } = await contactsApi.post("users/signup", credentials);
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
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await axios.get(
//         "https://66093b4c0f324a9a2882f3ea.mockapi.io/vlashark/contacts"
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (newContact, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "https://66093b4c0f324a9a2882f3ea.mockapi.io/vlashark/contacts",
//         newContact
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, { rejectWithValue }) => {
//     try {
//       await axios.delete(
//         `https://66093b4c0f324a9a2882f3ea.mockapi.io/vlashark/contacts/${contactId}`
//       );
//       return contactId;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );
