import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cart-api-test-123.herokuapp.com/'
});

export default api;
