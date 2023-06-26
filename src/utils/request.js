import axios from 'axios'

axios.interceptors.request.use(config => {
    // console.log(config, '请求拦截');
    return config
})
axios.interceptors.response.use(res => {
    // console.log(res, '响应拦截');
    return res
})
export default function request(url, data = {}, method = 'post') {
    return new Promise((resolve, reject) => {
        const options = {
            url,
            method
        }
        if (method.toLowerCase() === 'get') {
            options.params = data
        } else {
            options.data = data
        }
        axios(options).then(res => {
            // console.log('返回数据', res);
            resolve(res.data)
        })
        .catch(error => {
            reject(error)
            // console.log('错误', error);
        })
    })
}

