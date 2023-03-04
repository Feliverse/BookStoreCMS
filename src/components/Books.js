import Book from './Book';

const bookList = [
  { type: 'Action', title: 'The Hunger Games', author: 'Suzanne Collins' },
  { type: 'Science Fiction', title: 'Dune', author: 'Frank Herbert' },
  { type: 'Economy', title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins' },
];

const Books = () => {
  <>
    <section className="forBooks">
      {bookList.map((book) => (
        <Book
          key={book.id}
          type={book.type}
          title={book.title}
          author={book.author}
        />
      ))}
    </section>
  </>;
};

export default Books;
