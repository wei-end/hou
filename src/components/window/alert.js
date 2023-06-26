import diyAlert from './alert.vue'


export default {
  //对象中要有install实例
  install(Vue, options) {
    // mian.js中vue.use传过来的配置项
    // console.log(options ,'看');
   
    // Vue.extend生成一个构造器

    let alertContructor = Vue.extend(diyAlert)
    // 创建实例
    let alertInstrance = new alertContructor()
    //修改实例中参数值
    alertInstrance.color = options.color
    // 创建方法
    let fn = {
      
      open(title,message) {
        alertInstrance.openAlert(title,message)
      },
      close() {
        alertInstrance.closeAlert()
      }
    }
    // 插入页面
    document.body.appendChild(alertInstrance.$mount().$el)

    //挂载在vue是实例上
    Vue.prototype.$diyalert = fn
  }



}