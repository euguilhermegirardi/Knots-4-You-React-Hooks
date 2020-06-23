import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-knots-4-you.herokuapp.com/'
});

export default api;
