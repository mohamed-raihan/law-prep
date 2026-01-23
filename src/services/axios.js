import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://backend.lawprep360.prepacademy.in/',
    headers: {
        'Content-Type': 'application/json',
    },
})