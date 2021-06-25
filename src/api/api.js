import axios from 'axios';

const api = (url, method, data=null) => {

    const options = {
        url: url,
        method: method,
        baseURL: 'http://localhost:9000',
        data: data
    }

    return axios(options);
}

export default api;