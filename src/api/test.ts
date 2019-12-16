import http from '../util/http';

export const getTopics = (data?) => {
    return http.get('/topics', data)
}

export const getDetail = (data?) => {
    return http.get(`/topic/${data}`, data)
}

