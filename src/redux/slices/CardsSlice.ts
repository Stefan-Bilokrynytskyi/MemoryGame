import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {CardItem} from '@src/utils/generateCardArray';

const initialState: {cards: CardItem[][] | null} = {
  cards: null,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<CardItem[][]>) => {
      state.cards = action.payload;
    },
  },
});

export const {setCards} = cardsSlice.actions;

export default cardsSlice.reducer;
