<template>
  <div>
    <Tem>
      <!-- 直接就传过去了 -->
      <div>11111</div>
      <div>11111</div>
    </Tem>
  </div>
</template>

<script>
import Tem from "./components/tem.vue";
export default {
  data() {
    return {};
  },
  components: {
    Tem,
  },
  mounted() {
    console.log(this.$slots, "看数据");
  },
};
</script>

<style>
</style>