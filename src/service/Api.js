import axios from 'axios';

const uuidCode = '';

export const Api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 50000,
});

export const DebtsData = axios.create({
    baseURL: `https://provadev.xlab.digital/api/v1?uuid${uuidCode}`,
    timeout: 50000,
})