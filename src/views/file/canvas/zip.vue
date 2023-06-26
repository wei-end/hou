<template>
  <div ref="aaa">
    <title>图片压缩</title>
    <input type="file" @change="inputChange" />
    <img :src="src" alt="" ref="img" />
  </div>
</template>

<script>
//保存blob对象好用
import { saveAs } from "file-saver";
export default {
  data() {
    return {
      src: "",
    };
  },
  methods: {
    inputChange(e) {
      let files = e.target.files[0];
      console.log(files);
      let fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.onload = () => {
        // this.src = fileReader.result;

        //不想在页面上展示该图片的话可以使用new image创建图片实例
        let img = new Image;
        img.src = fileReader.result;
        this.$nextTick(() => {
          let canvas = document.createElement("canvas");
          canvas.width = img.width;
          canvas.height = img.height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(
            img, //
            0,
            0,
            img.width,
            img.height
          );
          //图片压缩  toBlob 方法 三个参数 , 第一个回调函数, 然后是图片格式 , 压缩比例
          canvas.toBlob(
            (blob) => {
              saveAs(blob, "img.jpeg");
            },
            "image/jpeg",
            0.8
          );
        });
      };
    },
  },
};
</script>

<style>
</style>