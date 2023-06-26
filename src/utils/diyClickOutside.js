
//实现点击某个元素外触发某些事件
export default {
  bind(el, binding, vnode, oldVnode) {
    const handle = (e) => {
      if (!(e.target == el || el.contains(e.target))) {
        vnode.context[binding.expression]()
      } 
    }
    el._clickOutside = handle
    document.addEventListener('click', handle)
  },

  unbind(el, binding, vnode, oldVnode) {
    document.removeEventListener('click', el._clickOutside)
    delete el._clickOutside

  }

}