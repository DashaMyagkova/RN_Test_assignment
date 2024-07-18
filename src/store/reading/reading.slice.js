/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const initialState = {
  currentBook: null,
  currentChapter: null,
};

export const readingSlice = createSlice({
  initialState,
  name: 'readingSlice',
  reducers: {
    resetState: (state) => {
      state.currentBook = null;
      state.currentChapter = null;
    },
    setCurrentBook: (state, { payload }) => {
      state.currentBook = payload;
    },
    setCurrentChapter: (state, { payload }) => {
      state.currentChapter = payload;
    },
  },
});

export const readingSlicePersistedReducer = persistReducer(
  {
    key: 'reading',
    storage: AsyncStorage,
    whitelist: ['currentBook', 'currentChapter'],
  },
  readingSlice.reducer
);
