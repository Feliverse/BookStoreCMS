function Form() {
  return (
    <div>
      <form className="newBook">
        <h2 className="title">ADD NEW BOOK</h2>
        <input type="text" className="inputBook" placeholder="Book title" />
        <select className="category" name="options">
          <option value="Category">Category</option>
        </select>
      </form>
      <button type="submit">ADD BOOK</button>
    </div>
  );
}

export default Form;
