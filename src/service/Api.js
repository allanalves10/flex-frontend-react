import axios from 'axios';

export const Api = axios.create({
    baseURL: 'https://provadev.xlab.digital/api/v1/',
    timeout: 50000,
})

export const ApiPlaceHolder = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 50000,
});