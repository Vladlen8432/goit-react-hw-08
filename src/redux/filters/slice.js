import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from "../contacts/slice";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    filter: "",
  },
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const selectFilter = (state) => state.filters.filter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const { updateFilter } = filtersSlice.actions;
export default filtersSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   filter: "",
// };

// const filterSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {
//     updateFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
// });

// export const { updateFilter } = filterSlice.actions;
// export default filterSlice.reducer;
