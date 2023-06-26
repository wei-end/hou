import { Message } from "element-ui"

export default {
    /**
      * bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
      * el: 作用的 dom 对象
      * value: 传给指令的值，要 copy 的值
      */
    bind(el, binding, vnode, oldVnode) {
        console.log(binding ,'binding');
        el.handel = () => {
            if (!binding.value) {
                Message.warning(
                    '无复制内容'
                )
                return
            }
            const textarea = document.createElement('textarea')
            textarea.readOnly = 'readonly'
            textarea.style.position = 'absolute'
            textarea.style.left = '-99999x'
            textarea.value = binding.value
            document.body.appendChild(textarea)
            textarea.select()
            textarea.setSelectionRange(0, textarea.value.length)
            const result = document.execCommand('Copy')
            if (result) {
                Message.success(
                    '复制成功'
                )
            }
            document.body.removeChild(textarea)
        }
        el.addEventListener('click', el.handel)
    },
    componentUpdated(el, { value }) {
        el.$value = value
    },
    // 指令与元素解绑的时候，移除事件绑定
    unbind(el) {
        el.removeEventListener('click', el.handel)
    }

}