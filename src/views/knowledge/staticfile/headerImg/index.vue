<template>
  <div>
    <div class="block"><el-avatar :size="50" :src="circleUrl"></el-avatar></div>
    <div>
      <img
        v-for="(item, index) in urlList"
        :key="index"
        :src="item.src"
        :alt="item.name"
        @click="changeHeader(item)"
      />
    </div>
  </div>
</template>

<script>
//暂时有问题  ,先搁置
// webpack 打包的时候.,通过require引入的图片,有的会转成url的形式,有的会转成base64的形式
export default {
  data() {
    return {
      circleUrl: "",
      urlList: [
        {
          name: "春天",
          src: require("../../../../assets/images/staticImage/1.jpg"),
        },
        {
          name: "夏天",
          src: require("../../../../assets/images/staticImage/2.jpg"),
        },
        {
          name: "秋天",
          src: require("../../../../assets/images/staticImage/3.jpg"),
        },
        {
          name: "冬天",
          src: require("../../../../assets/images/staticImage/5.jpg"),
        },
      ],
    };
  },
  methods: {
    changeHeader(item) {
      console.log(item);
      this.circleUrl = item.src;
    },
  },
};
</script>

<style lang='less' scoped>
img {
  width: 40px;
  height: 40px;
}
</style>