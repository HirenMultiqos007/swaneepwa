//2.

// import { configureStore } from '@reduxjs/toolkit'
// import { rootReducer } from './Slices'
// import createSagaMiddleware from 'redux-saga'
// import rootSaga from './Sagas'
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
// import thunk from 'redux-thunk';

// const sagaMiddleware = createSagaMiddleware()

// const reducers = combineReducers({
//   counter: rootReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, reducers);

// export const store = configureStore({
//   reducer: persistedReducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
// });

// sagaMiddleware.run(rootSaga);

// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./Slices";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Sagas";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['navigation'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

// export const persistor = persistStore(store);
