import { createSlice } from '@reduxjs/toolkit';

const categories = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },

  reducers: {
    checkstatus: () => ({ categories: 'under construction' }),
  },
});

export default categories.reducer;
export const { checkstatus } = categories.actions;
