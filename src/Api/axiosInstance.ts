import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    error => {
        console.error('API error:', error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
