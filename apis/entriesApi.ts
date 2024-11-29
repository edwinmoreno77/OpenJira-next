import axios from "axios";

const entriesApi = axios.create({
    baseURL: '/api',
    timeout: 15000,
});

export default entriesApi;