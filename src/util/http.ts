import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    withCredentials: true,   //跨域请求时是否需要使用凭证,是否允许带cookie这些
    // @ts-ignore
    responseType: JSON,   
    timeout: 5000,  
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(response => {
    return response
}, err => {
    // console.log(err);
})


const http = {
    get(url:string, params) {
        return instance.get(url, params)
    },
    post(url:string, params) {
        return instance.post(url, params)
    }
}

export default http;