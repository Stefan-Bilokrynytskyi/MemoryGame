import {configureStore} from '@reduxjs/toolkit';
import cardsSlice from './slices/CardsSlice';

const store = configureStore({
  reducer: {cards: cardsSlice},
});

export type AppStore = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export default store;
