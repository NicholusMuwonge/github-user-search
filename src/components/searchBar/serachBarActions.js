import searchUsersContants from '../../common/constants/constants';

const setSuccessfulSearchResponseToState = (data) => (
  {
    type: searchUsersContants.SUCCESSFUL_SEARCH,
    payload: data,
  }
);

const setFailedfulSearchResponseToState = (error) => (
  {
    type: searchUsersContants.SUCCESSFUL_SEARCH,
    payload: error,
  }
);

export { setSuccessfulSearchResponseToState, setFailedfulSearchResponseToState };
