<template>
  <div class="alert" v-if="visiable"  :style="{border:`1px solid ${color}` }">
    <div>{{ title }} <span @click="closeAlert">关闭</span></div>
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      message: "",
      visiable: false,
      color:'black'
    };
  },
  methods: {
    openAlert(title, message) {
      this.title = title ? title : "自定义弹窗";
      this.message = message ? message : "自定义信息";
      this.visiable = true;
    },
    closeAlert() {
      this.visiable = false;
    },
  },
};
</script>

<style scoped lang='less'>
.alert {
  position: fixed;
  width: 500px;
  height: 100px;
  
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99999;
}
</style>