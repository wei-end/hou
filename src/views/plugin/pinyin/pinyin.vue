<template>
  <div>1111</div>
</template>

<script>
import { pinyin } from "pinyin-pro";
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(pinyin("魏永康"));
    // 获取不带声调的拼音
    console.log(pinyin("魏永康", { toneType: "none" }));
    // 获取声调转换为数字后缀的拼音
    console.log(pinyin("魏永康", { toneType: "num" }));
    // 获取数组形式带音调拼音
    console.log(pinyin("魏永康", { type: "array" }));
    // 获取数组形式不带声调的拼音
    console.log(pinyin("魏永康", { toneType: "none", type: "array" }));
    // 获取数组形式声调转换为数字后缀的拼音
    console.log(pinyin("魏永康", { toneType: "num", type: "array" }));
    console.log(pinyin("魏永康", { pattern: "first", type: "array" }));
  },
};
</script>

<style>
</style>