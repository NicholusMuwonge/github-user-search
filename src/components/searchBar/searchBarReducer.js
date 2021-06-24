const { default: searchUsersContants } = require('../../common/constants/constants');

const initialState = {
  data: {},
  error: {},
};

const searchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchUsersContants.SUCCESSFUL_SEARCH:
      return {
        data: action.payload,
        error: {},
      };
    case searchUsersContants.FAILED_SEARCH:
      return {
        error: action.payload,
        data: {},
      };
    default:
      return state;
  }
};

export default searchUsersReducer;
