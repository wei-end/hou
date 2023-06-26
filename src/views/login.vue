<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <img
          src="@/assets/images/login/leftcircle.png"
          alt=""
          class="circle circleStartAni"
        />
        <img
          src="@/assets/images/login/leftrocket.png"
          alt=""
          class="rocket rocketSatrtAni"
        />
      </div>
      <div class="right">
        <div class="rightContent">
          <h1>欢迎您进入我们的系统</h1>
          <div class="input">
            <div class="inputGroup">
              <input
                @keydown.enter="keydownNumber"
                type="text"
                v-model="number"
                required
              />
              <span>Enter Number</span>
            </div>
            <div class="inputGroup">
              <input
                @keydown.enter="keydownPassword"
                ref="pwd"
                type="text"
                v-model="password"
                required
              />
              <span>Password</span>
            </div>
          </div>
          <div class="btn">
            <el-button v-loading="loading" @click="login">登录</el-button>
          </div>
          <el-divider>后台1.0</el-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "",
      password: "88888888",
      loading: false,
      redirect:undefined
    };
  },
  mounted() {
    document
      .querySelector(".circle")
      .addEventListener("animationend", function () {
        this.classList.remove("circleStartAni");
        this.classList.add("circleEndAni");
      });
    document
      .querySelector(".rocket")
      .addEventListener("animationend", function () {
        this.classList.remove("rocketSatrtAni");
        this.classList.add("rocketEndAni");
      });
  },
  methods: {
    async login() {
      let params = {
        user: this.number,
        password: this.password,
      };
      if (!this.number) {
        this.$message.warning("请输入账号");
        return;
      }
      if (!this.password) {
        this.$message.warning("请输入密码");
        return;
      }
      let res = await this.$http.login(params);
      console.log(res, "login");
      if (res.code == 200) {
        localStorage.setItem("my-token", res.token);
        //为了退出登录后,再次登录直接进入退出前的页面
        this.$router.push({ path: this.redirect || "/" });
      } else {
        this.$message.warning(res.message);
      }
    },
    keydownNumber() {
      this.$refs.pwd.focus();
    },
    keydownPassword() {
      this.login();
    },
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true, // 监视回调初始就会执行一次, 而不是改变才调用
    },
  },
};
</script>

<style lang='less' scoped>
@import "@/assets/less/login.less";
</style>