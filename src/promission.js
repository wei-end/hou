import router from "./router";
import store from './store'

import NProgress from 'nprogress' // nprogress插件
import 'nprogress/nprogress.css' // nprogress样式
//全局路由守卫  , 白名单
let whiteRoutes = ['/login', '/register']
router.beforeEach(async (to, from, next) => {
    // console.log(to, from);
    NProgress.start();
    let token = localStorage.getItem('my-token')
    if (token) {
        //如果已经请求回来路由权限,放行
        if (store.state.layout.asyncRoutes.length > 0) {
            if (to.path == '/home') {
                next('/home/mock')
                NProgress.done();

                return
            }
            next()
        } else {
            if (to.path == '/login') {
                next('/')
                return
            } else {
                //如果本地vuex后台请求的数据刷新页面没了,就重新发送请求
                //必须用atait,等动态路由添加完之后再走
                await store.dispatch('layout/ASYNCASYNCROUTES')
                //很关键  next({ ...to })如果参数to不能找到对应的路由的话，就再执行一次beforeEach((to, from, next)直到其中的next({ ...to})能找到对应的路由为止。
                // 如果 addRoute 并未完成，路由守卫会一层一层的执行执行，直到 addRoute 完成，找到对应的路由
                next({ ...to })
            }
        }

    } else {
        if (whiteRoutes.includes(to.path)) {
            next()
        }
        else {
            next('/login')
        }
    }
})

router.afterEach(() => {
    NProgress.inc(20);
    NProgress.done();
})