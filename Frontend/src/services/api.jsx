import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:7001', // Your backend URL
});

export default API;
