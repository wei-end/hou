

export default {
  bind(el, binding, vnode, oldVnode) {
  },
  inserted(el, binding, vnode, oldVnode) {
    let mark = false;
    //要移动的dom 元素
    const dragEle = el
    //dom中可点击移动的区域
    const Element = el.childNodes[0];
    Element.style.cursor = 'move'
    // 父元素
    let ParDom
    let styles
    if (binding.value.window != 'window') {
      ParDom = document.querySelector("." + binding.value.window);
      styles = window.getComputedStyle(ParDom);
    }

    //父元素的宽高  距离是扣得左右的距离
    let windowWeight, windowHeight, windowLeft, windowTop
    if (binding.value.window == 'window' || binding.value.window=='') {
      //!    如果是window 
      windowWeight = window.innerWidth;
      windowHeight = window.innerHeight;
      windowLeft = 0;
      windowTop = 0;
    } else {
      //!    如果不是window
      windowWeight = styles.getPropertyValue("width").slice(0, -2);
      windowHeight = styles.getPropertyValue("height").slice(0, -2)
      windowLeft = ParDom.getBoundingClientRect().left;
      windowTop = ParDom.getBoundingClientRect().top;
    }
    //drag的宽高
    let dragWeight = dragEle.getBoundingClientRect().width;
    let dragHeight = dragEle.getBoundingClientRect().height;
    //获取
    let domX, domY;
    let top, left;
    const mousedown = (e) => {
      left = dragEle.getBoundingClientRect().left;
      top = dragEle.getBoundingClientRect().top;
      let x = e.clientX;
      let y = e.clientY;
      //鼠标距离dom的距离
      domX = x - left;
      domY = y - top;
      mark = true;
    }
    const mousemove =  (e) => {
      if (mark) {
        let x = e.clientX;
        let y = e.clientY;
        let positionX = x - domX - windowLeft;
        let positionY = y - domY - windowTop;
        dragEle.style.left = positionX + "px";
        dragEle.style.top = positionY + "px";
        if (positionX < 0) {
          dragEle.style.left = "0px";
        } else if (positionX > windowWeight - dragWeight) {
          dragEle.style.left = windowWeight - dragWeight + "px";
        } else {
          dragEle.style.left = positionX + "px";
        }
        if (positionY < 0) {
          dragEle.style.top = "0px";
        } else if (positionY > windowHeight - dragHeight) {
          dragEle.style.top = windowHeight - dragHeight + "px";
        } else {
          dragEle.style.top = positionY + "px";
        }
      }
    }
    const mouseup = (e)=>{
      if (mark) {
        console.log("抬起");
        mark = false;
      }
    }
    Element.addEventListener("mousedown", mousedown);
    window.addEventListener("mousemove",mousemove);
    window.addEventListener("mouseup", mouseup);
    el._mousedown = mousedown
    el._mousemove = mousemove
    el._mouseup= mouseup
  },
  update() { },
  componentUpdated() {

  },
  unbind(el) {
    console.dir(el)
    const Element = el.childNodes[0];
    
    Element.removeEventListener("mousedown", el._mousedown);
    window.addEventListener("mousemove",el._mousemove);
    window.addEventListener("mouseup", el._mouseup);
    
  
  }
}