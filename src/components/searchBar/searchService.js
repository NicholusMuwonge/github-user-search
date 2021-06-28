import Api from '../../axios/apiRoutes';
import { setSuccessfulSearchResponseToState } from './serachBarActions';

let page = 1;
const searchResults = [];
const searchService = (params) => async (dispatch) => {
  try {
    const response = await Api.users({
      query: params, sortParam: '', order: 'desc', page,
    });
    // Github restricts to only 1000 results per search
    searchResults.push(...response.data.items);
    if (response.data.items.length === 100 && page < 10) {
      page += 1;
      dispatch(searchService(params));
    } else {
      dispatch(setSuccessfulSearchResponseToState(searchResults, response.data.total_count));
    }
  } catch (error) {
    if (!error.response) {
      dispatch(setSuccessfulSearchResponseToState(error));
    } else {
      dispatch(setSuccessfulSearchResponseToState(error.response));
    }
  }
};

export default searchService;
