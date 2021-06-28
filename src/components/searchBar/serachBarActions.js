import searchUsersContants from '../../common/constants/constants';

const setSuccessfulSearchResponseToState = (data, count) => (
  {
    type: searchUsersContants.SUCCESSFUL_SEARCH,
    payload: data,
    count,
  }
);

const setFailedfulSearchResponseToState = (error) => (
  {
    type: searchUsersContants.SUCCESSFUL_SEARCH,
    payload: error,
  }
);

export { setSuccessfulSearchResponseToState, setFailedfulSearchResponseToState };
