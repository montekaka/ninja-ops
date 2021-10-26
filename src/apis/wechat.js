import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_MS_BACKEND_BASE_PATH 
});

export default instance;