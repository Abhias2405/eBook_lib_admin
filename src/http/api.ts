import axios from 'axios';

const api = axios.create({
    baseURL: process.env.BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const login = async (data: { email: string; password: string }) =>
    api.post('/api/users/login', data);