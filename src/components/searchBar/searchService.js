import Api from '../../axios/apiRoutes';
import { setSuccessfulSearchResponseToState } from './serachBarActions';

const searchService = async (params, dispatch) => {
  try {
    const response = await Api.users(params);
    dispatch(setSuccessfulSearchResponseToState(response.data));
  } catch (error) {
    if (!error.response.status) {
      dispatch(setSuccessfulSearchResponseToState(error.response));
    } else {
      dispatch(setSuccessfulSearchResponseToState(error.response));
    }
  }
};

export default searchService;
