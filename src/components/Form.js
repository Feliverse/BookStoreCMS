import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/bookSlice';

function Form() {
  const [title, addTitle] = useState('');
  const [author, addAuthor] = useState('');
  const dispatch = useDispatch();
  const handleTitle = (e) => {
    e.preventDefault();
    addTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    addAuthor(e.target.value);
  };

  return (
    <div>
      <h2 className="title">ADD NEW BOOK</h2>
      <form
        className="addNew"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addBook({ title, author }));
        }}
      >
        <input
          type="text"
          className="inputBook"
          placeholder="Book title"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
        <input
          type="text"
          className="inputAuthor"
          placeholder="Book author"
          value={author}
          onChange={(e) => handleAuthor(e)}
        />
      </form>
      <button type="submit">ADD BOOK</button>
    </div>
  );
}

export default Form;
