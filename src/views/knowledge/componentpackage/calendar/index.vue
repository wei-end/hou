<template>
  <div>
    <el-calendar>
      <!-- 插槽做法
      <template #dateCell="obj">
        <div :class="returnClass(obj)">
          {{ obj.data.day.split("-")[2] }}
        </div>
      </template> -->
      <template #dateCell="obj">
        <DateId :datalist="list" :day="obj.data.day"></DateId>
      </template>
    </el-calendar>
  </div>
</template>

<script>
//render 函数做法
import DateId from "./component/dateId.vue";
export default {
  data() {
    return {
      value: new Date(),
      list: [
        {
          time: "2023-04-27",
          finish: false,
          list: ["aaa", "bbb", "ccc"],
        },
        {
          time: "2023-04-26",
          finish: true,
          list: ["bbb", "ccc"],
        },

        {
          time: "2023-04-28",
          finish: false,
          list: ["ccc"],
        },
        {
          time: "2023-04-29",
          finish: false,
        },
        {
          time: "2023-04-30",
          finish: false,
        },
      ],
    };
  },
  components: {
    DateId,
  },
  methods: {
    //插槽做法
    // returnClass(obj) {
    //   let classObj = {};
    //   this.list.forEach((item) => {
    //     if (item.time == obj.data.day) {
    //       classObj.circle = true;
    //       if (item.finish) {
    //         classObj.finish = true;
    //       } else {
    //         classObj.unfinish = true;
    //       }
    //     }
    //   });
    //   return classObj;
    // },
  },
};
</script>

<style lang='less' scoped>
/deep/.el-calendar {
  width: 350px;
  margin: 0 auto;

  th,
  td {
    height: 37px;
    padding: 0;
    border: none !important;
  }
  .el-calendar__body {
    .el-calendar-table .el-calendar-day {
      text-align: center;
      height: 40px;
      padding: 0;
      line-height: 40px;
    }
  }
  .is-today,
  .el-calendar-day:hover {
    background-color: aquamarine;
    border-radius: 20px;
  }
}
.circle {
  position: relative;
}
.circle::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
}
.finish::after {
  background-color: green;
}
.unfinish::after {
  background-color: red;
}
/deep/.el-calendar-day:hover .tooltip{
  display: block;
}
/deep/.tooltip{
  position: absolute;
  z-index: 5;
  display: none;
  width: 300px;
  border: 1px solid pink;
  min-height: 20px;
  background-color:red;
}
</style>