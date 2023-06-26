<template>
  <div>
    复制
    <p>{{ clip }}</p>
    <el-button id="btn" :data-clipboard-text="clip" @click="clipContent"
      >一键复制</el-button
    >

    <el-button v-copy="clip" v-if="loading">复制</el-button>
    <el-button @click="update">修改内容</el-button>
  </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      clip: "复制的内容",
      loading: true,
    };
  },
  mounted() {},
  methods: {
    clipContent() {
      var clipboard = new Clipboard("#btn");
      clipboard.on("success", function (e) {
        e.clearSelection();
        clipboard.destroy(); //最好销毁一下,要不然会出现多个输出
      });
      clipboard.on("error", function (e) {
        console.error("Action:", e.action);
        console.error("Trigger:", e.trigger);
      });
    },
    update() {
      this.loading = false;
      this.clip = "修改后";
      //强行渲染
      requestAnimationFrame(() => {
        this.loading = true;
      });
    },
  },
};
</script>

<style>
</style>