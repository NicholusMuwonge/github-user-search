import {compose, createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(
  rootReducer,
);
export {store};
