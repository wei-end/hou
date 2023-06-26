//普通js调用vue实例上挂载的方法
import Vue from "vue"
var vm = new Vue()
//获取当前基本路由对象
import router from '@/router'
import { errObj } from '@/router'
//递归函数,把数据处理成自己要的样式
const loadView = (viewPath) => {
    return () => import('@/views' + viewPath)
}
//递归处理后台返回的数据,把他得到自己想要的格式  以便之后动态添加进路由
function handleRoute(arr) {
    let routelist = []
    inner(arr)
    function inner(arr) {
        arr.forEach(item => {
            if (item.children && item.children.length > 0) {
                inner(item.children)
            } else {
                //有个坑,该懒加载路由要在外面写函数,否则报错
                item.component = loadView(item.component)
                routelist.push(item)
            }
        })
    }
    return routelist
}

export default {
    namespaced: true,
    state: {
        isCollapse: false, //作用,左侧菜单的sibar的宽,以及整个el-aside的宽
        screenFull: false, //是否全屏
        asyncRoutes: [],//后台请求回来的路由,格式也是左侧菜单的,左侧菜单用这个渲染
        routes: [],//后台请求加上本地路由,即是所有要在route.js里面要动态书写的路由
    },
    getters: {
    },
    mutations: {
        SET_ISCOLLAPSE(state, pre) {
            state.isCollapse = pre
        },
        SET_SCREENFULL(state, pre) {
            state.screenFull = pre
        },
        SET_ASYNCROUTE(state, pre) {
            state.asyncRoutes = pre
        },
        SET_ROUTES(state, pre) {
            // 处理获取全部路由,这样可以让所有的数据对象都在该数组里将来用作动态添加route
            state.routes = pre
            state.routes.forEach(item => {
                // 第一个参数home是layout的name,该操作会向name为home的添加chidren数据
                router.addRoute('home', item)
            })
            //最后添加404,要不然动态路由添加之前,匹配不到路由的时候就进入404了
            router.addRoute(errObj)
        },
    },
    actions: {
        async ASYNCASYNCROUTES({ commit }) {
            let params = {
                token: localStorage.getItem('my-token')
            }
            let res = await vm.$http.routelist(params)
            if (res.code == 201) {
                //用来左侧的菜单栏
                commit('SET_ASYNCROUTE', JSON.parse(JSON.stringify(res.data.list)))

                let data = handleRoute(res.data.list)
                //用来动态渲染路由
                commit('SET_ROUTES', data)
            }
        }
    },
}