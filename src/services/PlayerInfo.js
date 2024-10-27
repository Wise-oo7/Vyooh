import axios from 'axios';

export const playerinfo = () => {
  return axios.get('http://localhost:7892/saheba/getall'); // Your API endpoint
};
