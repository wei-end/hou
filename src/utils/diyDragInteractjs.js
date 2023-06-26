//拖拽api 
import interact from 'interactjs'
export default {
  bind(el, binding, vnode, oldVnode) {
    // console.log(el);
  },
  inserted(el, binding, vnode, oldVnode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
    //el的站位
    let content = el.getBoundingClientRect();
    console.log(content);
    let left = content.left
    let right = content.right
    let windowwidth = window.innerWidth
    let windowheight = window.innerHeight

    interact(el).draggable({
      ignoreFrom: '.nodrag',
      onmove: function (event) {
        let target = event.target;

        // keep the dragged position in the data-x/data-y attributes
        let x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        let y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element

        console.log(left, x);
        console.log(Math.abs(x));
        if (x < 0 && Math.abs(x) > left) {
          target.style.transform =
            'translate(' -left + 'px, ' + y + 'px)';
            target.setAttribute('data-x', -left);
        }else{
          target.style.webkitTransform =
          target.style.transform =
          'translate(' + x + 'px, ' + y + 'px)';
          target.setAttribute('data-x', x);
        }

        // update the position attributes

        target.setAttribute('data-y', y);

      }
    });
  },
  unbind(el, binding, vnode, oldVnode) {
    interact(el).unset()
  }
}