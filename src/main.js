import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 重置样式
import '@/assets/css/reset.css'
//全局样式  自定义图标
import '@/assets/css/global.css'
//mock模拟数据
import '/mock'
//按需加载element-ui组件
import '@/plugin/element'
import 'element-ui/lib/theme-chalk/index.css';
//引入路由守卫
import './promission'
//引入iconfont
import '@/assets/icon/iconfont.css'
//全局组件
import Header from '@/components/header'
Vue.component('publicHeader', Header)
//自定义指令
import Copy from '@/utils/diyDirective'
Vue.directive('copy', Copy)
//拖拽指令
import Drag from '@/utils/diyDragle'
Vue.directive('drag', Drag)
//自定义点击某个元素节点之外的指令
import Outside from './utils/diyClickOutside'
Vue.directive('Outside' , Outside)
//interactjs实现拖拽指令
import Inter from './utils/diyDragInteractjs'
Vue.directive('Inter' , Inter)
//文本超出隐藏指令
import textHide from './utils/directive/text.js'
Vue.directive('textHide' , textHide)


//所有的接口
import route from '@/Api/route'
import login from '@/Api/login'
//把所有的接口挂载在vue原型上
Vue.prototype.$http = { ...route, ...login }
//挂在一个新的alert
// import alert from '@/components/window/alert.vue'
// Vue.prototype.$alert = alert
//重写alert方法,用来进行弹窗提示
window._alert = window.alert;
window.alert = (value,options) => {
	Vue.prototype.$alert(value, '自定义',options)
}


//vue   安装插件实现全局弹窗
import diyalert from '@/components/window/alert.js'
Vue.use(diyalert , {color:'pink'})





//实现中英文切换
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN', // 设置默认语言为中文
  messages: {
    'zh-CN': require('./assets/lang/zh.js'), // 中文语言包
    'en-US': require('./assets/lang/en.js') // 英文语言包
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount('#app')
