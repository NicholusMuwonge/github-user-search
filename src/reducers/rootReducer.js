import { combineReducers } from 'redux';
import searchUsersReducer from '../components/searchBar/searchBarReducer';

const rootReducer = combineReducers({
  searchUsersReducer,
});

export default rootReducer;
