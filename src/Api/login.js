import request from '@/utils/request'

//登录
const login = data => {
    return request("/login", data, 'get')
}

export default {
    login
}