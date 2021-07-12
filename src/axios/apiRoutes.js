import baseApiConfig from './baseConfig';

const Api = {
  users(data) {
    return baseApiConfig.get(`/search/users?q=${data.query}&order=${data.order}&sort=${data.sortParam}&page=${data.page}&per_page=10`);
  },
  getUsersData(userEndpoint) {
    return baseApiConfig.get(userEndpoint);
  },
};

export default Api;
