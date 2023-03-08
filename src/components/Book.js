import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/bookSlice';

const Book = (book) => {
  const dispatch = useDispatch();
  const {
    type, title, author, chapter, id,
  } = book;
  const handleDelete = (id) => {
    dispatch(removeBook({ id }));
  };
  return (
    <div className="theBook">
      <h3 className="bookType">{type}</h3>
      <h1 className="bookTitle">{title}</h1>
      <h2 className="bookAuthor">{author}</h2>
      <ul className="bookOptions">
        <li className="option">Comments</li>
        <li>
          <button
            className="option"
            onClick={() => { handleDelete(id); }}
            onKeyDown={() => { handleDelete(id); }}
            type="button"
          >
            Remove
          </button>
        </li>
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
