<template>
  <div class="containerPar">
    <div class="iframe">
      <iframe
        ref="iframe"
        src="http://localhost:5501/README/ifame%E5%BC%95%E7%94%A8%E7%9A%84html%E9%A1%B5%E9%9D%A2.html"
        width="100%"
        height="100%"
      ></iframe>
    </div>
    <div>
      <el-button @click="insetinto">插入</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  // 可以操作引入的iframe页面的时候可以通过该方式解决
  // mounted() {
  //   //vue 里面.webpack会自动触发该函数,解决方法是传参的时候传对象,对象添加标识
  //   window.addEventListener("message", (e) => {
  //     console.log(e.data);
  //     if (e.data.type == "save") {
  //       console.log(e.data.data);
  //     }
  //   });
  // },
  // methods: {
  //   insetinto() {
  //     let iframe = this.$refs.iframe;
  //     //获取iframe的window对象
  //     let _window = iframe.contentWindow;
  //     //获取iframe的doument对象
  //     let _document = iframe.contentDocument;

  //     //通过该方式可以向iframe进行传值    第一个参数,时进行传的值,第二个参数是传递的地址
  //     // _window.postMessage({type:'insertinto' , data:'张三'} ,'http://127.0.0.1:5500/iframe.html')
  //     _window.postMessage({ type: "insertinto", data: "张三" }, "*");
  //   },
  // },

  //不能操作源代码的时候,通过操作dom的形式去操作
  mounted() {
    let iframe = this.$refs.iframe;

    // 处理兼容行问题 // 看看iframe是否加载完毕
    if (iframe.attachEvent) {
      iframe.attachEvent("onload", function () {
        // iframe加载完毕以后执行操作
        console.log("iframe已加载完毕");
      });
    } else {
      iframe.onload = function () {
        // iframe加载完毕以后执行操作
        console.log("iframe已加载完毕");
      };
    }

    //解决跨域问题 , 两个项目都要在localhost上进行启动才行
    document.domain = "localhost";
    let position = 0;
    iframe.addEventListener("load", () => {
      let _document = iframe.contentDocument;
      let textAreaDom = _document.querySelector("textarea");
      textAreaDom.addEventListener("blur", (e) => {
        position = e.target.selectionStart;
        textAreaDom.setAttribute("position", position);
      });
      let saveBtn = _document.querySelector("button");
      saveBtn.addEventListener("click", () => {
        let value = textAreaDom.value;
        this.save(value);
      });
    });
  },
  methods: {
    insetinto() {
      let iframe = this.$refs.iframe;
      let _document = iframe.contentDocument;
      let textAreaDom = _document.querySelector("textarea");
      let position = textAreaDom.getAttribute("position");
      textAreaDom.value =
        textAreaDom.value.slice(0, position) +
        "测试" +
        textAreaDom.value.slice(position);
    },
    save(val) {
      console.log(val);
    },
  },
};
</script>

<style lang='less' scoped>
.containerPar {
  width: 100%;
  height: 100%;
}
.iframe {
  width: 100%;
  height: 540px;
  iframe {
    border: none;
  }
}
</style>