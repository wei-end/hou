# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 拖拽官网
https://www.itxst.com/vue-draggable/yvq3mifz.html
https://www.itxst.com/vue-draggable/yvq3mifz.htmlhttps://www.itxst.com/sortablejs/neuinffi.html

# 属性讲解
chosenClass     拖拽时的class名称
forceFallback   你要自定义ghostClass chosenClass dragClass样式时，建议forceFallback设置为true
group           如果两个拖拽数组，可以利用该属性定义成一样的名称实现两个数据之间的数据切换
animation       如设置animation=1000表示1秒过渡动画效果


### 路由几级菜单都已经满足



## 开发全局插件
使用vue.extend  vue.use

使用方式参见components/window/alert.js
使用vue.use 如果传入的是一个对象 ,  那么这个对象要有install函数 ,  install有两个参数  Vue , options 

## icon 图标的书写