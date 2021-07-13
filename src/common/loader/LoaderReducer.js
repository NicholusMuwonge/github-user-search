const { loaderContants } = require('../constants/constants');

const initialState = { loading: false };
const LoaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case (loaderContants.LOADING):
      return {
        loading: true,
      };
    case (loaderContants.STOP_LOADING):
      return {
        loading: false,
      };
    default:
      return state;
  }
};
export default LoaderReducer;
