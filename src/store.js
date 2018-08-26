import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers';
import apiMiddleware from './api';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import ensureFSAMiddleware from '@meadow/redux-ensure-fsa';
import thunk from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'
import * as R from 'ramda';

const persistConfig = {
  key: 'root',
  version: 1,
  debug: false,
  storage,
  whitelist: []
};

const fsaMiddleware = ensureFSAMiddleware({
  ignore: function ({type}) {
    return R.any(R.equals(type), ['persist/PERSIST', 'persist/REHYDRATE']);
  }
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureProdStore = (history) => {
  return createStore(
      persistedReducer,
      applyMiddleware(thunk, routerMiddleware(history), apiMiddleware)
  );
};

const configureDevStore = (history) => {
  const composeEnhancer = composeWithDevTools({
    name: 'Bitfinex Stats', actionsBlacklist: []
  });
  return createStore(
      persistedReducer,
      composeEnhancer(applyMiddleware(thunk, routerMiddleware(history), apiMiddleware, fsaMiddleware))
  );
};

export default process.env.NODE_ENV === 'production' ? configureProdStore : configureDevStore;