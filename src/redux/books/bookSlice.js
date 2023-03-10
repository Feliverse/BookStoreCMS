import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/mnDASL1wvNqItY6gqsMO/books';

const getBooksArr = (jsonbooks) => {
  const id = Object.keys(jsonbooks);
  const booksArr = Object.values(jsonbooks).flat();
  const books = booksArr.map((book, index) => ({
    ...book,
    item_id: id[index],
  }));
  return books;
};
export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async () => {
    const res = await axios.get(url)
      .then((response) => response.data);
    return getBooksArr(res); // Returns the correct format of books data
  },
);

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (obj) => {
    try {
      await axios.post(url, obj);
      return obj;
    } catch (error) {
      return error;
    }
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({
        ...state,
        books: action.payload,
        isLoading: false,
      }))
      .addCase(fetchBooks.rejected, () => {
        console.log('rejected');
      })
      .addCase(addNewBook.fulfilled, (state, action) => ({
        ...state,
        books: [...state.books, action.payload],
        isLoading: false,
      }));
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
