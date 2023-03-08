import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const { bookList } = useSelector((store) => store.books);
  return (
    <ul className="theList">
      {
      bookList.map((book) => (
        <Book
          key={book.id}
          bookInfo={book}
        />
      ))
      }
    </ul>
  );
}

export default BookList;
