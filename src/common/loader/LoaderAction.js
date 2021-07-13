const { loaderContants } = require('../constants/constants');

const startLoaderAction = () => (
  {
    type: loaderContants.LOADING,
  }
);

const stopLoaderAction = () => (
  {
    type: loaderContants.STOP_LOADING,
  }
);

export { startLoaderAction, stopLoaderAction };
