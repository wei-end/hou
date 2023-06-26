<script>
export default {
  props: {
    //要渲染标点的数组
    datalist: {
      type: Array,
      default: () => [],
    },
    //所有天数
    day: {
      type: String,
      default: "",
    },
  },
  render(h) {
    let obj = {};
    let tiplist = [];
    this.datalist.map((item) => {
      if (item.time == this.day) {
        tiplist = item.list ? item.list : [];
        obj.circle = true;
        if (item.finish) {
          obj.finish = true;
        } else {
          obj.unfinish = true;
        }
      }
    });

    function renderP(list){
      let arr = []
      list.forEach(item=>{
        arr.push(h('p' , item))
      })
      return arr
    }
    if (tiplist.length > 0) {
      return h("div", { class: obj }, [
        this.day.split("-")[2],
        h("div", { class: "tooltip" } , renderP(tiplist)),
      ]); 
    } else {
      return h("div", { class: obj }, this.day.split("-")[2]);
    }
  },
};
</script>

