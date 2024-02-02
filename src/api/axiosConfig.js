import axios from 'axios';

export default axios.create({
    // baseURL: 'https://0839-58-186-244-28.ngrok-free.app',
    baseURL: 'http://localhost:8080',
    headers: { 'ngrok-skip-browser-warning': 'true'}
});