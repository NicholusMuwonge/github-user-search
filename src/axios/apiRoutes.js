import baseApiConfig from './baseConfig';

const Api = {
  users(data) {
    return baseApiConfig.get(`/search/users?q=${data.query}&order=${data.order}&sort=${data.sortParam}&page=${data.page}&per_page=100`);
  },
};

export default Api;
