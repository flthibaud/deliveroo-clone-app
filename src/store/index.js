/* global */
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create plugins
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  debug: true,
  whitelist: [''],
  blacklist: [''],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const enhancers = composeEnhancers(
  applyMiddleware(
    ...middlewares,
    thunk,
  ),
);

const configureStore = () => {
  const store = createStore(
    persistedReducer,
    enhancers,
  );
  const persistor = persistStore(store);
  return { store, persistor };
};

export default configureStore;
