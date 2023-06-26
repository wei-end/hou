const compareWidth = (el) => {
  // 如果没有超出宽度，即子<父 则移除tooltip
  console.log(el);
  if (el.querySelector('.ellipse-text') && el.querySelector('.ellipse-text').textContent.length * 18  < el.offsetWidth) {
    const copySpan = el.querySelector('.el-tooltip'); 
    el.removeChild(copySpan); 
  }
  if(el.querySelector('.ellipse-text') && el.querySelector('.ellipse-text').textContent.length * 18  > el.offsetWidth){
    const copySpan = el.querySelector('.complete-text'); 
    el.removeChild(copySpan);
  }
};
export default {
  bind: (el, binding) => {
  },
  inserted: (el) => {
    compareWidth(el); // 可以获取到ajax数据的DOM元素，即真实的宽度
  },
};
