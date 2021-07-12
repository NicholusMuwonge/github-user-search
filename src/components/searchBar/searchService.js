// import axios from 'axios';
import axios from 'axios';
import Api from '../../axios/apiRoutes';
import { setSuccessfulSearchResponseToState } from './serachBarActions';

const page = 1;
const searchService = (params) => async (dispatch) => {
  try {
    const response = await Api.users({
      query: params.query, sortParam: '', order: 'desc', page: params.page ? params.page : page,
    });
    // Github restricts to only 1000 results per search
    const userData = response.data.items;
    const allUrls = [];
    dispatch(setSuccessfulSearchResponseToState(userData, response.data.total_count, params.query));
    for (let i = 0; i < userData.length; i++) {
      // fetch all user data for this page
      allUrls.push(Api.getUsersData(userData[i].url));
    }

    const res = await axios.all([...allUrls]);
    const dataToBeUpdated = [];
    for (let i = 0; i < res.length; i++) {
      dataToBeUpdated.push(res[i].data);
    }
    dispatch(setSuccessfulSearchResponseToState(
      dataToBeUpdated, response.data.total_count, params.query,
    ));
  } catch (error) {
    if (!error.response) {
      dispatch(setSuccessfulSearchResponseToState(error));
    } else {
      dispatch(setSuccessfulSearchResponseToState(error.response));
    }
  }
};

export default searchService;
