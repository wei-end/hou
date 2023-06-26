<template>
  <div class="containerPar">
    <!-- <div class="drag" v-drag="optionfix">
      <header class="header" >头部可拖拽</header>
      <div class="content">fixed布局</div>
    </div> -->

    <div class="diy" v-drag="option" v-if="aaa">
      <header class="headerdiy" >头部</header>
      <div class="contentdiy">内容</div>
    </div>
    <el-button @click="aaa = !aaa">消失</el-button>


  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        window: "containerPar",
      },
      optionfix: {
        window: "window",
      },
      dialogTableVisible:false,
      aaa:false
    };
  },
  methods: {},
};
</script>

<style scoped lang='less'>
.containerPar {
  width: 100%;
  height: 100%;
  position: relative;
}
.drag,
.diy {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
.drag {
  position: fixed;
  left: 600px;
  top: 50px;
}
.diy {
  position: absolute;
  left: 100px;
  top: 50px;
}

.content,
.contentdiy {
  border-top: 1px solid black;
}
.header,
.headerdiy {
  cursor: pointer;
}
</style>