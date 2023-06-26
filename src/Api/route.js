import request from '@/utils/request'
//获取routelist
const routelist = data => {
    return request("/routelist", data, 'get')
}

//获取路由
export default {
    routelist
}
