<template>
  <div>
    <title>文件预览</title>
    <input type="file" @change="change" />
    <!-- src 有两种预览方式 , 第一中是线上url , 第二种是dataurl也就是base64 -->
    <!-- <vue-office-excel :src="excel" style="height: 50vh" v-if="excel" /> -->
  </div>
</template>

<script>
// import VueOfficeExcel from "@vue-office/excel";
//引入相关样式
// import "@vue-office/excel/lib/index.css";
export default {
  data() {
    return {
      // excel: "/a.xlsx", //放在public里面的文件会直接暴露在服务器的根部,只要知道地址就可以直接下载,打包后会变成向http://localhost:8080/a.xlsx请求资源
      excel: "",
    };
  },
  components: {
    // VueOfficeExcel,
  },
  methods: {
    change(e) {
      console.log(e);
      const file = e.target.files[0];
      console.log(file);
      const reader = new FileReader();
      // 读取成base64
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        console.log(e);
        this.excel = e.target.result;
      };
    },
  },
};
</script>

<style>
</style>