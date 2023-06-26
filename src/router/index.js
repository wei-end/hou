import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/layout/index.vue'),
    meta: { title: '布局' },
    name: 'home',
    children: [
    ]
  },

  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    component: () => import('@/views/register'),
    meta: {
      title: '注册'
    }
  },

]
//404页面要在所有动态路由注册之后进行注册,要不然直接访问还没动态添加的路由的时候,就会直接进入404页面
export const errObj = {
  path: '*',
  component: () => import('@/views/404.vue'),
  name: '404',
  meta: {
    title: '404页面'
  }
}

//解决一些跳转bug
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => { })
};

const createRouter = () => new VueRouter({
  mode:'history',
  routes: routes,
})
const router = createRouter()
//重置路由, 如果路由不进行重置的话,退出登录后下一个用户还可以进入上一个人的权限页面,比如管理员登录退出后,普通用户登录,n那么用户还可以直接进入管理员的页面
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router
