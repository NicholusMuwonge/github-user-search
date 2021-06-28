import axios from 'axios';

const axiosBaseConfig = axios.create({
  baseURL: 'https://api.github.com',
  // timeout: 10000,
  headers: {
    Accept: 'application/vnd.github.v3+json',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
  },
});

export default axiosBaseConfig;
