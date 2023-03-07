function Form() {
  return (
    <div>
      <form className="newBook">
        <h2 className="title">ADD NEW BOOK</h2>
        <input type="text" className="inputBook" placeholder="Book title" />
        <input type="text" className="inputAuthor" placeholder="Book author" />
      </form>
      <button type="submit">ADD BOOK</button>
    </div>
  );
}

export default Form;
