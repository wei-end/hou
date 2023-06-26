<template>
  <div class="diyDrag contentsda1">
    <div class="drag" v-Inter="option" ref="drag" v-if="aaa">
      <el-button class="nodrag">忽略</el-button>
      <el-button class="nodrag">忽略</el-button>
    </div>

    <div class="dragb" v-Inter v-if="bbb">
      <el-button class="nodrag">忽略</el-button>
      <el-button class="nodrag">忽略</el-button>
    </div>
    <el-button @click="aaa = !aaa">状态a</el-button>
    <el-button @click="bbb = !bbb">状态b</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        pardom: "contentsda1",
      },
      aaa: false,
      bbb: false,
    };
  },
  mounted() {
    // console.dir(this.$refs.drag);
  },
  methods: {},
};
</script>

<style scoped lang='less'>
.diyDrag {
  width: 100%;
  height: 100%;
}
.drag {
  width: 200px;
  position: fixed;
  height: 200px;
  background-color: red;
  top: 200px;
  left: 500px;
}
.dragb {
  top: 500px;
  left: 200px;
  width: 200px;
  position: fixed;
  height: 200px;
  background-color: red;
}
</style>>
