import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './modules';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

store.subscribe(() => {
  console.log('state has changed', store.getState());
});

export default store;
