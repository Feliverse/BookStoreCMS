import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    status: 'Under construction',
  },

  reducers: {
    underConstruction: (state) => ({
      ...state,
      status: 'Under construction',
    }),
  },
});

export const { underConstruction } = categorySlice.actions;
export default categorySlice.reducer;
