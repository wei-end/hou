<template>
  <div>
    <!-- <el-table
      v-el-table-infinite-scroll="load"
      :data="data"
      :infinite-scroll-disabled="disabled"
      height="200px"
    >
      <el-table-column type="index" />
      <el-table-column prop="date" label="date" />
      <el-table-column prop="name" label="name" />
      <el-table-column prop="age" label="age" />
    </el-table> -->

    <!-- <div class="table-wrapper"> -->
    <el-table :data="tableData" style="width: 100%" height="300px">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
    <!-- </div> -->
  </div>
</template>

<script>
import ElTableInfiniteScroll from "el-table-infinite-scroll";
const dataTemplate = new Array(10).fill({
  date: "2009-01-01",
  name: "Tom",
  age: "30",
});

export default {
  directives: {
    "el-table-infinite-scroll": ElTableInfiniteScroll,
  },
  data() {
    return {
      data: [],
      page: 0,
      total: 5,
      disabled: false,
      tableData: [
        {
          date: "2022-03-14",
          name: "张三",
          address: "北京市海淀区上地十街10号院",
        },
        {
          date: "2022-03-15",
          name: "李四",
          address: "上海市浦东新区张江高科技园区",
        },
        {
          date: "2022-03-16",
          name: "王五",
          address: "广州市天河区珠江新城",
        },
        {
          date: "2022-03-15",
          name: "李四",
          address: "上海市浦东新区张江高科技园区",
        },
        {
          date: "2022-03-16",
          name: "王五",
          address: "广州市天河区珠江新城",
        },
        {
          date: "2022-03-15",
          name: "李四",
          address: "上海市浦东新区张江高科技园区",
        },
        {
          date: "2022-03-16",
          name: "王五",
          address: "广州市天河区珠江新城",
        },
      ],
    };
  },
  mounted() {
    this.autoScroll();
  },
  //   created() {
  //     let windowHeight =
  //       document.documentElement.clientHeight || document.body.clientHeight;
  //     // 动态计算表格的高度，200为屏幕内除了表格以外其他元素的高度，依实际情况而定
  //     this.tableHeight = windowHeight - 200 + "px";
  //   },
  //   mounted() {
  //     this.getTableData(this.tableSearch);
  //   },

  methods: {
    load() {
      if (this.disabled) return;
      this.page++;
      if (this.page <= this.total) {
        this.data = this.data.concat(dataTemplate);
      }

      if (this.page === this.total) {
        this.disabled = true;
      }
    },
    autoScroll() {
      const tableBody = document.querySelector(".el-table__body-wrapper");
      let height = 0; //存一个变量,用来判断是否到le表格的底部了
      let mark = false; //判断是否到底的标志
      setInterval(() => {
        if (mark == false) {
          tableBody.scrollTop += 1;
          height += 1;
        }
        //如果递增的变量大于表格滚动的高度说明,已经到底了
        if (height > tableBody.scrollTop) {
          tableBody.scrollTop -= 1;
          mark = true;
          if (tableBody.scrollTop == 0) {
            mark = false;
            height = 0;
          }
        }
      }, 50);
    },
  },
};
</script>

<style lang='less' scoped>
</style>