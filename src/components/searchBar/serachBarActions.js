import searchUsersContants from '../../common/constants/constants';

const setSuccessfulSearchResponseToState = (data, count, query) => (
  {
    type: searchUsersContants.SUCCESSFUL_SEARCH,
    payload: data,
    count,
    query,
  }
);

const setFailedfulSearchResponseToState = (error) => (
  {
    type: searchUsersContants.SUCCESSFUL_SEARCH,
    payload: error,
  }
);

export { setSuccessfulSearchResponseToState, setFailedfulSearchResponseToState };
