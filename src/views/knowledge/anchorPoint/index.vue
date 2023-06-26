<template>
  <div class="singlePar">
    <!-- histroy 路由在实现锚点跳转的时候不会出现replace路由容纳欧刷新页面爆404问题 -->
    <p>
      <a :href="'#id' + index " v-for="(item, index) in arr" :key="index"
        >锚点跳转 标题{{ index }}</a
      >
    </p>
    <!-- <p>
      <router-link v-for="(item, index) in arr" :key="index" :to="'#name'+index">router-link锚点跳转 标题{{ index }}</router-link>
      <router-link to="mock">dsfds</router-link>
    </p> -->
    <div v-for="(item, index) in arr" :key="index">
      <h1 :id="'id' + index" >标题{{ index }}</h1>
      <a :name="'name' + index">a标题{{ index }}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {},
  mounted(){
  }
};
</script>

<style lang='less' scoped>
.singlePar {
  div {
    width: 500px;
    height: 600px;
    border: 1px solid red;
    margin-top: 10px;
  }
  h1 {
    font-size: 20px;
  }
  p {
    display: flex;
    flex-direction: column;
  }
}
</style>