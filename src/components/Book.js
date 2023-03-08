import React from 'react';
import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/bookSlice';

const Book = ({ bookInfo }) => {
  const {
    type, title, author, chapter,
  } = book;
  return (
    <div className="theBook">
      <h3 className="bookType">{bookInfo.type}</h3>
      <h1 className="bookTitle">{bookInfo.title}</h1>
      <h2 className="bookAuthor">{bookInfo.author}</h2>
      <ul className="bookOptions">
        <li className="option">Comments</li>
        <li>
          <button type="button" onClick={() => dispatch(removeBook({ bookInfo }))}>Remove</button>
        </li>
        <li>Edit</li>
      </ul>
      <div>
        <div>Circle</div>
        <h2>{bookInfo.percent}</h2>
        <h3>{bookInfo.status}</h3>
      </div>
      <div className="progress">
        <p className="current">CURRENT CHAPTER</p>
        <h3 className="chapterNo">{bookInfo.chapter}</h3>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.defaultProps = {
  bookInfo: null,
};

Book.defaultProps = {
  bookInfo: null,
};

Book.propTypes = {
  bookInfo: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    chapter: PropTypes.string.isRequired,
  }),
};

export default Book;