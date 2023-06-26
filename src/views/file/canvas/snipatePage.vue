<template>
  <div ref="ashdj">
    <title>页面截图</title>
    <div class="aaa" ref="aaa"></div>
    <el-button @click="handleDOM">截图dom</el-button>
    <el-button @click="handlePage">截图页面</el-button>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
export default {
  methods: {
    handleDOM() {
      html2canvas(this.$refs.aaa).then((canvas) => {
        this.$refs.ashdj.appendChild(canvas);
        // console.log(canvas);
        // canvas.toBlob((blob)=>{
        //     saveAs(blob , 'dom.png')
        // } , 'image/png' , 1)
      });
    },
    handlePage() {
      html2canvas(document.querySelector('#app')).then((canvas) => {
        this.$refs.ashdj.appendChild(canvas);
        console.log(canvas);

        // canvas.toBlob((blob)=>{
        //     saveAs(blob , 'dom.png')
        // } , 'image/png' , 1)
      });
    },
  },
};
</script>

<style lang='less' scoped>
.aaa {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>