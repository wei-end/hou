<template>
  <el-container>
    <el-aside :width="isCollapse ? '65px' : '250px'"> <SibarVue /></el-aside>

    <el-container>
      <el-header><Header /></el-header>
      <el-main>
        <!-- <transtion :name="transTion"> </transtion> -->
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import SibarVue from "./components/sibar/sibar.vue";
import Header from "./components/head/index.vue";
import { mapState } from "vuex";
export default {
  components: {
    SibarVue,
    Header,
  },
  data() {
    return {
      transTion: "",
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.layout.isCollapse,
    }),
  },
  mounted() {},
  methods: {},
  watch: {
    // $route: {
    //   handler(newVal, oldValue) {
    //     console.log(newVal, oldValue);
    //     // if(newVal !== oldValue){
    //     // }
    //   },
    // },
  },
};
</script>

<style lang='less' scope>
.el-container {
  width: 100%;
  height: 100%;
  .el-header {
    background-color: #c8e2f7;
  }
  .el-aside {
    background-color: #fae8fa;
  }
  .el-main {
    background-color: #e3ebf9;
    .el-scrollbar {
      height: 100%;
      .el-scrollbar__view{
        height: 100%;
      }
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
}
</style>