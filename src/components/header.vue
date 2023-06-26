<template>
  <div>
    <div>公共的头部{{ num }}</div>
    <slot name="first"></slot> <br />
    <slot></slot><br />
    <slot name="list" :list="list"></slot>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: "10",
    },
  },
  data() {
    return {
      list: [{ name: "张三" }, { name: "李四" }],
    };
  },
};
</script>

<style>
</style>