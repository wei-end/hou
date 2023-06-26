<template>
  <div class="containerPar">
    <title>剪贴图片</title>
    <input type="file" @change="inputChange" />
    <img :src="src" alt="" ref="img" />
    <el-button @click="cut">剪贴</el-button>
    <div class="cover" v-if="show">
      <div
        class="content"
        :style="{ top: curTop + 'px', left: curleft + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "",
      show: false,
      curTop:0,
      curleft:0
    };
  },
  methods: {
    inputChange(e) {
      let file = e.target.files[0];
      let fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        this.src = fileReader.result;
      };
    },
    cut() {
      this.show = true;
      console.dir(this.$refs.img);
    },
  },
};
</script>

<style lang='less' scoped>
img {
  width: 200px;
  height: 200px;
}
.containerPar {
  width: 100%;
  height: 100%;
}
.cover {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
}
.content {
  width: 100px;
  height: 100px;
  border: 1px solid red;
  box-sizing: border-box;
  position: absolute;
}
</style>