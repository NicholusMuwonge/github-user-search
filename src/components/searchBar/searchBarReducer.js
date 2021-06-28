import searchUsersContants from '../../common/constants/constants';

const initialState = {
  data: {},
  error: {},
  count: 0,
};

const searchUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchUsersContants.SUCCESSFUL_SEARCH:
      return {
        ...state,
        data: { ...action.payload },
        count: action.count,
        error: {},
      };
    case searchUsersContants.FAILED_SEARCH:
      return {
        ...state,
        error: action.payload,
        data: {},
      };
    default:
      return state;
  }
};

export default searchUsersReducer;
