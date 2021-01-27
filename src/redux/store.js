import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducer from './reducers';

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
