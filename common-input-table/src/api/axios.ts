import type { CreateAxiosDefaults } from 'axios';
import axios from 'axios';

// NOTE: set 60 secs due to BIG QUERY sometime runs longer than 30s
const TIMEOUT_MS = 1000 * 70;

const AXIOS_CONFIG: CreateAxiosDefaults = {
  baseURL: 'http://cigro',
  timeout: TIMEOUT_MS,
  withCredentials: false,
};

const axiosInstance = axios.create(AXIOS_CONFIG);

export default axiosInstance;
