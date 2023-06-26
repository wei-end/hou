<template>
  <div>
    <div>模板组件</div>
    <!-- 匿名插槽,没有名字的就会显示在这,不管父组件写的内容的位置是不是在一起 -->
    <slot></slot>
    <slot name="header"></slot>
    <slot name="footer"></slot>
    <!-- 可以设置默认值 -->
    <!-- <slot name="header">header没有传插槽的时候显示我</slot>
    <slot name="footer">footer没有传插槽的时候显示我</slot> -->
    <!-- 作用域插槽 -->
    <slot name="slotzyy" :user="user"></slot>
    <br />
    <slot name="slotzyyCe" :user="user" :count="count"></slot>
    <br />
    <slot name="sslotzyyShi" :user="user"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "张三",
        age: "15",
      },
      count: 0,
    };
  },
  mounted() {
    //只读,可以进行获取值
    console.log(this.$slots, "看数据");
  },
};
</script>

<style>
</style>