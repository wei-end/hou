<template>
  <div class="container">
    <div class="left" @click="handleIsCollapse">
      <i class="el-icon-s-fold" v-show="!isCollapse"></i>
      <i class="el-icon-s-unfold" v-show="isCollapse"></i>
    </div>

    <div class="right">
      <div>
        <Search />
      </div>
      <el-tooltip
        effect="dark"
        :content="!screenFull ? '全屏' : '取消全屏'"
        placement="bottom"
      >
        <div @click="screen">
          <i class="iconfont icon-quanping" v-show="!screenFull"></i>
          <i class="iconfont icon-quxiaoquanping" v-show="screenFull"></i>
        </div>
      </el-tooltip>

      <el-dropdown trigger="click">
        <img src="../../../assets/images/head/logo.webp" alt="" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { resetRouter } from "@/router";
import { mapState, mapMutations } from "vuex";
import screenfull from "screenfull";
import Search from "@/components/headerSearch/index.vue";
export default {
  data() {
    return {};
  },
  components: {
    Search,
  },
  mounted() {},
  methods: {
    ...mapMutations({
      SET_ISCOLLAPSE: "layout/SET_ISCOLLAPSE",
      SET_SCREENFULL: "layout/SET_SCREENFULL",
      SET_ASYNCROUTE: "layout/SET_ASYNCROUTE",
    }),
    handleIsCollapse() {
      this.SET_ISCOLLAPSE(!this.isCollapse);
    },
    //全屏
    screen() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: "you browser can not work",
          type: "warning",
        });
        return false;
      }
      screenfull.toggle();
      this.SET_SCREENFULL(!this.screenFull);
    },
    //登出
    logout() {
      resetRouter();
      this.SET_ASYNCROUTE([]);
      localStorage.removeItem("my-token");
      this.$router.replace("/login?redirect=" + this.$route.fullPath);
    },
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.layout.isCollapse,
      screenFull: (state) => state.layout.screenFull,
    }),
  },
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    i {
      font-size: 18px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    i {
      font-size: 18px;
      margin-right: 20px;
    }
    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }
  }
}
</style>