import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Books from './components/Books';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="Categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
