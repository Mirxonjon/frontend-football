//give me axios and I'll give you a nice api

import axios from 'axios';

const FT_API = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: import.meta.env.VITE_YT_API_KEY,
    }
}); 

export default FT_API;