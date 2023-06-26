<template>
  <div class="container">
    <div class="ceshi">
      <div class="par" v-textHide v-for="(item, index) in arr" :key="index">
        <el-tooltip :content="item.name" placement="top-start">
          <span class="ellipse-text"> {{ item.name }}</span>
        </el-tooltip>
        <span class="complete-text"> {{ item.name }}</span>
      </div>
    </div>
    <el-button @click="update">修改</el-button>
    <el-button @click="updateA">修改二</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        {
          name: "阿萨德哈科技山东科技客家话打开山东科技客户卡实践活动空间航空很快就啊上升空间哈空间大科技很快就啊是的客家话kj",
        },
        {
          name: "萨达尽快尽快",
        },
        {
          name: "哦撒建档立卡",
        },
      ],
    };
  },
  methods: {
    update() {
      // this.arr.push({
      //   name:'sadkhjahsdkjashkjdhkajhs阿斯利康大家来看乐凯大街阿里卡'
      // })
      this.arr[0].name = '撒的结合'
    },
    updateA(){
      this.arr[0].name = '萨达离开四大皆空克拉斯尽量快点记录卡记录卡建档立卡家里的科技路看见了卡极乐空间考虑'

    }
  },
};
</script>

<style lang='less' scoped>
.ceshi {
  width: 20%;
  border: 1px solid red;
  box-sizing: border-box;
  height: 250px;
}
.container {
  width: 100%;
  height: 100%;
}
.par {
  width: 100%;
}
span {
  width: 100%;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>