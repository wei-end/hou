<template>
  <div>
    <title>文件流表格互转</title>
    <input type="file" @change="inputChange" />
    <table ref="table">
      <thead>
        <tr>
          <th>name</th>
          <th>age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>张三</td>
          <td>15</td>
        </tr>
        <tr>
          <td>李四</td>
          <td>16</td>
        </tr>
      </tbody>
    </table>
    <div class="table">
      <div v-html="tableChange"></div>
    </div>
    <el-button @click="jsonXlsx">json转xlsx表格</el-button>
    <el-button @click="tableXlsx">tableDom转xlsx表格</el-button>
  </div>
</template>

<script>
import { read, writeFile, utils } from "xlsx";
//文件和xlsx读取转化步骤
//1. 选取文件 file对象/blob对象 -->转化成
//2.后台返回文件流,前端下载或者读取数据转成blob操作与上相等 , 下载使用writeFile可以下载
export default {
  data() {
    return {
      tableChange: "",
    };
  },
  methods: {
    inputChange(e) {
      const file = e.target.files[0];
      console.log(file);
      // file.arrayBuffer().then((res) => { 
      //   console.log(res);
      //   //读取成json数据   , 先转化成workbook 在转化成json数据 / html
      //   const wb = read(res);
      //   const data = utils.sheet_to_json(wb.Sheets.Sheet1);
      //   console.log(data);
      //   //读取成html
      //   const html = utils.sheet_to_html(wb.Sheets.Sheet1);
      //   this.tableChange = html;
      // });

      //下载
    },

    jsonXlsx() {
      let data = [
        { name: "张三", age: 12 },
        { name: "李四", age: 14 },
        { name: "王五", age: 11 },
        { name: "赵六", age: 13 },
      ];
      //创建一个工作表
      const ws = utils.json_to_sheet(data);
      console.log(ws);
      // 创建一个新的workbook
      const wb = utils.book_new();
      console.log(wb);
      //往里面添加表,还有工作表名称
      utils.book_append_sheet(wb, ws, "sheets");
      writeFile(wb, "表1.xlsx");
    },
    tableXlsx() {
      const tableDom = this.$refs.table;
      console.log(tableDom);
      const sheet = utils.table_to_sheet(tableDom);
      console.log(sheet);
      const wb = utils.book_new();
      utils.book_append_sheet(wb, sheet, "sheet1");
      writeFile(wb, "tableDom.xlsx");
    },
  },
};
</script>

<style lang='less' scoped>
td,
th {
  border: 1px solid black;
}
table {
  border-collapse: collapse;
}
</style>