import baseApiConfig from './Config';

const Api = {
  users(data) {
    return baseApiConfig.post(`/users?q=${data.query}&o=${data.order}&s=${data.sortParam}`, data);
  },
};

export default Api;
