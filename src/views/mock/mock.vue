<template>
  <div>
    <!-- 公共头部 -->
    <!-- <publicHeader num="100">
      <template #first> 第一 </template>
      <div >123121</div>
      <template #list="{list}"> 
        <div>{{list}}</div>
      </template>
    </publicHeader> -->
    <title>接口测试</title>
    <el-button @click="ceshi">测试接口</el-button>
    <!-- 测试 -->
    <el-select v-model="value" style="width: 500px">
      <el-option
        v-for="(item, index) in cities"
        :key="index"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right">{{ item.value }}</span>
      </el-option>
    </el-select>
    <!-- <div>
      <div v-for="item in 50" :key="item">{{ item }}</div>
    </div> -->

    <div class="container">
      <template v-for="(item, index) in ceshiarr">
        <template v-if="item.a == 1">
          <div :key="index">
            <img src="../../assets/logo.png" alt="" />
          </div>
        </template>
        <template v-else>
          <span class="newline" :key="index + 'span'"></span>
          <div :key="index">
            <img src="../../assets/logo.png" alt="" />
          </div>
        </template>
      </template>
    </div>
    <i class="bgicon_vue"></i>
    <button @click="alert">测试全局弹窗</button>
    <button @click="alert1">再谈一个</button>
    <!-- <el-input
      type="textarea"
      
     
      autosize
      v-model="measureDataForm.measuresDesc"
      placeholder="请输入措施描述"
      clearable
      :style="{ width: '74%' }"
    > -->
    <!-- </el-input> -->
    <el-input
      ref="inputRef"
      type="textarea"
      placeholder="请输入内容"
      v-model="result"
      resize="none"
      rows="5"
    ></el-input>
  </div>
</template>

<script>
import { mapActions } from "vuex";
//混入
import time from "@/mixins/time";

//组件
export default {
  mixins: [time],
  data() {
    return {
      value: "",
      cities: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
        {
          value: "Nanjing",
          label: "南京",
        },
        {
          value: "Chengdu",
          label: "成都",
        },
        {
          value: "Shenzhen",
          label: "深圳",
        },
        {
          value: "Guangzhou",
          label: "广州",
        },
      ],
      ceshiarr: [
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 2 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 2 },
        { a: 1 },
        { a: 1 },
        { a: 1 },
        { a: 2 },
        { a: 1 },
      ],
      result: "askjdhaksjdhkj1o阿斯兰建档立卡",
      textCursor: undefined,
    };
  },
  mounted() {
    let  textCursor = this.$refs.inputRef.$el.children[0]
    console.log(textCursor);
    textCursor.focus()

  },
  methods: {
    ...mapActions({
      ASYNCASYNCROUTES: "layout/ASYNCASYNCROUTES",
    }),
    inputBlur() {
      this.textCursor = this.$refs.inputRef.$el.children[0].selectionStart;
      console.log(this.textCursor);
    },
    async ceshi() {
      this.ASYNCASYNCROUTES();
    },
    alert() {
      //第一种全局弹窗
      console.log(this.$diyalert);
      this.$diyalert.open("撒上的", "三大阿斯顿");
      //第二种利用element ui实现
      // alert('三大阿斯顿')
    },
    alert1() {
      this.$diyalert.open("aaa", "nnn");
    },
  },
};
</script>

<style scoped lang='less'>
.container {
  width: 500px;
  height: 600px;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  img {
    width: 20px;
    height: 20px;
  }
  div {
    width: 40px;
    height: 40px;
  }
  .newline {
    flex-basis: 100%;
    height: 0px;
    display: inline-block;
    align-items: flex-start;
  }
}
</style>