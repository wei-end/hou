<template>
  <div>
    <div class="block">
      <div class="title">图片src展开静态资源切换方式一</div>
      <ul>
        <li
          v-for="(item, index) in ulList"
          :key="index"
          :class="{ active: index == tabindex }"
          @click="changeLi(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>
      <img :src="imgSrc" alt="" />
    </div>
    <div class="block">
      <div class="title">图片src展开静态资源切换方式二</div>
      <ul>
        <li
          v-for="(item, index) in ulList"
          :key="index"
          :class="{ active: index == tabindexTwo }"
          @click="changeLiTwo(item, index)"
        >
          {{ item.name }}
        </li>
      </ul>
      <img :src="imgSrcTwo" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ulList: [
        {
          name: "春天",
          src: require("../../../../assets/images/staticImage/1.jpg"),
          srcTwo: "../../../../assets/images/staticImage/1.jpg",
        },
        {
          name: "夏天",
          src: require("../../../../assets/images/staticImage/2.jpg"),
          srcTwo: "../../../../assets/images/staticImage/2.jpg",
        },
        {
          name: "秋天",
          src: require("../../../../assets/images/staticImage/3.jpg"),
          srcTwo: "../../../../assets/images/staticImage/3.jpg",
        },
        {
          name: "冬天",
          src: require("../../../../assets/images/staticImage/4.jpg"),
          srcTwo: "../../../../assets/images/staticImage/4.jpg",
        },
      ],
      //第一类
      tabindex: 0,
      imgSrc: "",
      //第二个
      tabindexTwo: 0,
      imgSrcTwo: "",
    };
  },
  async created() {
    // 第二类
    //引入本地静态资源时,采用静态引入的时候,webpack打包的时候会自动使用require打包该文件,该类型有背景图url 、img src
    //如果采用的是动态引入,v-bind会解析其变量,就不会自动通过require的方式进行打包了,这样html显示的img src地址还是打包前的地址,所以引入不到
    // this.imgSrcTwo = this.ulList[0].srcTwo;
    // 解决方法一:异步方法通过import 解决
    this.imgSrcTwo = await this.importImg(1);
    console.log(this.imgSrcTwo);

    //解决方法二:同步方式使用url构造函数解决  ,vue3+vite项目可以使用
    //当前模块的基准路径
    // console.log(import.meta.url);
    // this.imgSrcTwo = this.urlImg(1);
  },
  methods: {
    changeLi(item, index) {
      this.tabindex = index;
    },
    async changeLiTwo(item, index) {
      this.tabindexTwo = index;
      this.imgSrcTwo = await this.importImg(this.tabindexTwo + 1);
    },
    //动态导入文件资源 import 返回一个promise  async await接受promise的resolve返回值
    async importImg(index) {
      const module = await import(
        `../../../../assets/images/staticImage/${index}.jpg`
      );
      return module.default;
    },
    //同步导入文件 , 使用原生的url构造函数实现不兼容ie
    urlImg(index) {
      let url = new URL(
        `../../../../assets/images/staticImage/${index}.jpg`,
        import.meta.url
      );
      return url.href;
      // return url.href;
    },
  },
  watch: {
    tabindex: {
      handler(newVal, oldVal) {
        this.imgSrc = this.ulList[newVal].src;
      },
      immediate: true,
    },
  },
};
</script>

<style lang='less' scoped>
.block {
  margin-top: 20px;
}
.title {
  font-size: 20px;
  font-weight: 800;
}
ul {
  margin-top: 20px;
  display: flex;
}
.active {
  color: blue;
}
img {
  width: 200px;
  height: 200px;
  margin-top: 10px;
}
.backImg {
  width: 200px;
  height: 200px;
  margin-top: 10px;
  // background-image: url(../../../assets/images/staticImage/1.jpg);
  background-size: cover;
  background-position: center;
}
</style>