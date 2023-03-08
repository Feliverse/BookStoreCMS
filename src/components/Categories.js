import { useDispatch, useSelector } from 'react-redux';
import { underConstruction } from '../redux/categories/categoriesSlice';

function Categories() {
  const { status } = useSelector((state) => state.Categories);
  const dispatch = useDispatch();
  return (
    <div>
      <button type="button" onClick={() => { dispatch(underConstruction()); }}>Check Status</button>
      <p>{status}</p>
    </div>
  );
}

export default Categories;
