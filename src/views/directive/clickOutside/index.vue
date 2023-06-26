<template>
  <div  >
    <!-- Your modal content here -->
    <!-- <div class="div" v-click-outside="closeModal">

    </div> -->
    <div class="div" v-Outside='closeModal'>
      <div style="width:50px;height:20px;border:1px solid red">aaa</div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    // 自定义指令名称为`click-outside`
    "click-outside": {
      bind: function (el, binding, vnode) {
        console.log(binding);
        el.clickOutsideEvent = function (event) {
          // 判断是否在当前元素内部点击
          if (!(el === event.target || el.contains(event.target))) {
            // 如果不是，则触发传入的回调函数
            binding.value();
          }
        };
        document.body.addEventListener("mousedown", el.clickOutsideEvent);
      },
      unbind: function (el) {
        document.body.removeEventListener("mousedown", el.clickOutsideEvent);
      },
    },
  },
  methods: {
    closeModal() {
      console.log(1111);
      // 关闭模态框的方法
    },
  },
};
</script>

<style scoped>
.div {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
</style>
