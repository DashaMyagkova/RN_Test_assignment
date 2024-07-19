/* eslint-disable no-param-reassign */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

const initialState = {
  chapterByBookId: {},
  currentBook: null,
};

export const readingSlice = createSlice({
  initialState,
  name: 'readingSlice',
  reducers: {
    resetState: (state) => initialState,
    setChapterByBookId: (state, { payload }) => {
      state.chapterByBookId = { ...state.chapterByBookId, ...payload };
    },
    setCurrentBook: (state, { payload }) => {
      state.currentBook = payload;
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
