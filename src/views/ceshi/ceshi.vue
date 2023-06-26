<template>
  <div class="containerPar">
    <div class="nav">
      <el-popover
        placement="right-start"
        width="200"
        trigger="click"
        popper-class="navpopper"
      >
        <div class="navScroll" slot="reference">
          <span :style="{ top: percent }"></span>
        </div>
        <div class="popver">
          <div
            v-for="(item, index) in anchorArr"
            :key="index"
            class="navItem"
            :class="{
              itemPadding: item.padding,
              isactive: focusIndex == index,
            }"
            @click="handleClick(item, index)"
          >
            {{ item.name }}
          </div>
        </div>
        <div class="line"></div>
      </el-popover>
      <img
        style="width: 20px"
        src="../../assets/logo.png"
        alt=""
        @click="totop"
      />
    </div>

    <div class="container" ref="patent">
      <div
        v-for="(item, index) in anchorArr"
        :key="index"
        class="a"
        :class="item.className"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anchorArr: [
        { name: "摘要", className: "abstractAnchor" },
        { name: "著录项目", className: "recordAnchor" },
        { name: "相关文献", className: "relateAnchor" },
        { name: "相关人", padding: true, className: "relateAnchor" },
        { name: "分类号", padding: true, className: "typeAnchor" },
        { name: "权利要求", className: "rightAnchor" },
        { name: "说明书", className: "illustrateAnchor" },
        { name: "技术领域", className: "technologyAnchor", padding: true },
        { name: "背景技术", className: "backAnchor", padding: true },
        { name: "发明内容", className: "inventAnchor", padding: true },
        { name: "附图说明", className: "pictureAnchor", padding: true },
        { name: "实施例", className: "executeAnchor", padding: true },
      ],
      focusIndex: 0,
      percent: "0px",
      observe: null,
      timeOut: null,
    };
  },
  mounted() {
    this.dom = document.querySelector(".abstractAnchor");
    //视口展示的高度
    let clientHeight = this.$refs.patent.clientHeight;
    //dom总高
    let scrollHeight = this.$refs.patent.scrollHeight;
    //可以滚动的高度
    let canScroll = scrollHeight - clientHeight;
    this.$refs.patent.addEventListener("scroll", (e) => {
      console.log(e);
      let px = (
        (210 - 34) *
        (e.target.scrollTop / (scrollHeight - clientHeight)).toFixed(2)
      ).toFixed(2);
      this.percent = px + "px";
      this.timeOut && clearTimeout(this.timeOut);
      this.timeOut = setTimeout(() => {
        this.dom = null;
      }, 100);
    });
    this.createObserve(canScroll);
    let domArr = document.querySelectorAll(".a");
    domArr.forEach((item) => {
      this.observe.observe(item);
    });
  },
  methods: {
    //create观察器
    createObserve(canScroll) {
      let options = {
        root: this.$refs.patent,
        threshold: 0.01,
      };
      this.observe = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (this.dom) {
              if (entry.target == this.dom) {
                return;
              }
            } else {
              this.top = entry.boundingClientRect.top;
              let classArr = entry.target.className.split(" ");
              this.anchorArr.forEach((item, ind) => {
                if (item.className == classArr[1]) {
                  this.focusIndex = ind;
                }
              });
            }
          }
        });
      }, options);
    },
    totop() {
      let  box = this.$refs.patent;
      box.scrollTop = 0;
    },
    handleClick(item, index) {
      this.focusIndex = index;
      this.init = true;
      this.dom = document.querySelector(`.${item.className}`);
      this.lock = { item: item, index: index };
      this.dom.scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang='less' scoped>
.nav {
  width: 20px;
  height: 100%;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navScroll {
  position: relative;
  width: 5px;
  height: 210px;
  background: #b7c1d9;
  border-radius: 2px;
  opacity: 0.7;
  span {
    position: absolute;
    display: inline-block;
    width: 5px;
    height: 34px;
    background: #1c4cba;
    border-radius: 2px;
    opacity: 0.7;
    left: 0px;
    top: 0%;
  }
}
.popver {
  width: 100%;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #1d2129;
  line-height: 24px;
  position: relative;
}
.navItem {
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    border: 1px solid #c9cdd4;
    margin-right: 8px;
    background-color: #fff;
  }
}
.itemPadding {
  font-weight: 400;
  color: #4e5969;
  margin-bottom: 7px;
  &::before {
    margin-right: 24px;
  }
}
.isactive {
  color: #1c4cba;
  &::before {
    background-color: #1c4cba;
  }
}
.line {
  left: 16px;
  top: 22px;
  position: absolute;
  width: 1px;
  height: 380px;
  background-color: #cbd4e0;
  z-index: -1;
}
</style>
<style lang='less' scoped>
.containerPar {
  width: 100%;
  height: 100%;
  display: flex;
}
.container {
  flex: 1;
  min-width: 0;
  height: 100%;
  overflow-y: auto;
}
.a {
  width: 100%;
  height: 100px;
  background-color: pink;
  margin-bottom: 10px;
}
.a:nth-of-type(odd) {
  height: 50px;
}
</style>
<style >
.navpopper {
  width: 158px;
  height: 410px;
}
</style>