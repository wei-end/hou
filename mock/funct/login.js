
const loginRes = function (params) {
    //get请求params拿不到  都在url上
    let arr = params.url.split('?')[1].split('&')
    let obj = {}
    arr.forEach(item => {
        let array = item.split('=')
        obj[array[0]] = array[1]
    })
    if (obj.user == 'admin' && obj.password == '88888888') {
        return {
            code: 200,
            token: 'token_admin'
        }
    }
    else if (obj.user == 'user' && obj.password == '88888888') {
        return {
            code: 200,
            token: 'token_user'
        }
    }
    else {
        return {
            code: 500,
            message: '用户不存在或密码错误'
        }
    }

}

export {
    loginRes
}
