<template>
  <div class="container">
    <div class="logo">
      <img src="../../../assets/images/head/logo.webp" alt="" />
    </div>
    <el-scrollbar class="scrollbar">
      <el-menu
        :default-active="deaultActive"
        unique-opened
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <menuItem :lists="asyncRoutes" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import menuItem from "./components/menuItem.vue";
import { mapState } from "vuex";
export default {
  components: {
    menuItem,
  },
  data() {
    return {
      deaultActive: "",
    };
  },
  watch: {
    //实现顶部搜索页面
    $route: {
      handler(to, from) {
        this.deaultActive = to.path;
      },
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.layout.isCollapse,
      asyncRoutes: (state) => state.layout.asyncRoutes,
    }),
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
  .logo {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 46px;
      height: 46px;
    }
  }
  /deep/.scrollbar {
    height: calc(100% - 200px);
    background-color: #fff;
    .el-scrollbar__view {
      height: 100%;
    }
    .el-scrollbar__wrap {
      overflow-x: hidden;
    }
  }
  .el-menu {
    height: 100%;
    border-right: none;
  }
}
</style>