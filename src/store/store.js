import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';

import { readingSlice, readingSlicePersistedReducer } from './reading';

const persistConfig = {
  key: 'persistor',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  [readingSlice.name]: readingSlicePersistedReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
