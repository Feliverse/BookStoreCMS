const Book = (book) => {
  const {
    type, title, author, chapter,
  } = book;
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
      <div className="progress">
        <p className="current">CURRENT CHAPTER</p>
        <h3 className="chapterNo">{chapter}</h3>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
