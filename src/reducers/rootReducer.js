import { combineReducers } from 'redux';
import LoaderReducer from '../common/loader/LoaderReducer';
import searchUsersReducer from '../components/searchBar/searchBarReducer';

const rootReducer = combineReducers({
  searchUsersReducer,
  LoaderReducer,
});

export default rootReducer;
