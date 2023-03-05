import Book from './Book';
import Form from './Form';

const bookList = [
  {
    id: 'book1',
    type: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    chapter: 'Chapter 17',
  },
  {
    id: 'book2',
    type: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    chapter: 'Chapter 3:"A Lesson Learned',
  },
  {
    id: 'book3',
    type: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    chapter: 'Introduction',
  },
];

function Books() {
  return (
    <section className="forBooks">
      {bookList.map((book) => (
        <Book
          key={book.id}
          type={book.type}
          title={book.title}
          author={book.author}
          chapter={book.chapter}
        />
      ))}
      <Form />
    </section>
  );
}

export default Books;
