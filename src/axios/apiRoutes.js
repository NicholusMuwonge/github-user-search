import baseApiConfig from './baseConfig';

const Api = {
  users(data) {
    return baseApiConfig.get(`/users?q=${data.query.strip()}&o=${data.order}&s=${data.sortParam}`);
  },
};

export default Api;
