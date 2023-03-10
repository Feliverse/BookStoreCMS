import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/bookSlice';

const Books = () => {
  const { books, isLoading } = useSelector((store) => store.books);
  console.log(books);
  const dispatch = useDispatch();

  useEffect(() => { dispatch(fetchBooks()); }, []);

  return (
    <section className="forBooks">
      <div>
        {isLoading && <h1 style={{ textAlign: 'center', color: 'blue' }}>Loading...</h1>}
      </div>
      {books.length > 0 && books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
      <Form />
    </section>
  );
};

export default Books;
