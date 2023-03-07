import { configureStore } from '@reduxjs/toolkit';
import crudReducer from '../features/crud/crudSlice';

const store = configureStore({
  crud: crudReducer,
});

export default store;
