const Book = (book) => {
  const { type, title, author } = book;
  return (
    <div className="theBook">
      <h3 className="bookType">{type}</h3>
      <h1 className="bookTitle">{title}</h1>
      <h2 className="bookAuthor">{author}</h2>
      <ul className="bookOptions">
        <li className="option">Comments</li>
        <li className="option">Remove</li>
        <li className="option">Edit</li>
      </ul>
    </div>
  );
};

export default Book;
