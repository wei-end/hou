# iframe通信方式
方式一:
 如果拥有嵌入的iframe源码的情况,可以使用postMessage的方式进行传参
 要传参的页面使用window.postMessage('参数值' , '页面地址/*')   通常用contentWindow获取iframe的window对象 ,注意发送方和接受方的要使用同一个window
 接受方使用window.addEventListener('message' , (e)=>{  e.data  })来接受



方式二:
 如果没有源码,嵌入的第三方的页面的话可通过操作dom进行交互
 要在使用iframe的页面要解决一下跨越问题   document.domain = 'lcoalhost'
 此时可以通过 contentDocument获取iframe的dom , 之后就可以进行操作了


# 小知识
在输入框中输入的时候,可以通过 blur 事件中 e.target.selectionStart获取到失去焦点的位置,可以做一些在失去焦点的地方做插入的操作