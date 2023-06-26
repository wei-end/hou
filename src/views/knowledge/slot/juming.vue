<template>
  <div>
    <div>具名插槽</div>
    <Tem>
      <div>开头</div>
      <template v-slot:footer>
        <div>footer</div>
      </template>
      <!-- v-slot可以简写# -->
      <!-- <template #header>
        <div>header</div>
      </template> -->
      <!-- 老版本写法 -->
      <template slot="header">萨迪克</template>
      <div>结尾</div>
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
  mounted(){
    console.log(this.$slots);
  }
};
</script>

<style>
</style>