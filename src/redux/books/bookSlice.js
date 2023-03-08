import { createSlice } from '@reduxjs/toolkit';
import initialStateBooks from '../../components/initialStateBooks';

const booksSlice = createSlice({
  name: 'books',
  bookList: initialStateBooks,
  reducers: {
    addBook: (state, action) => ({
      state,
      books: [state.books, action.payload],
    }),
    removeBook: (state, action) => ({
      state,
      books: state.books.filter((book) => book.id !== action.payload.id),
    }),
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
