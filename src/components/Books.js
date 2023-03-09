import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const { books } = useSelector((store) => store.books);
  return (
    <section className="forBooks">
      {books.map((book) => (
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
}

export default Books;
