<template>
  <div class="container">
    <div style="width: 100px">{{ drag ? "拖拽中" : "拖拽停止" }}</div>
    <!--使用draggable组件-->
    <draggable
      v-model="myArray"
      chosenClass="chosen"
      group="people"
      forceFallback="true"
      animation="200"
      sort="true"
      @start="onStart"
      @end="onEnd"
    >
      <transition-group>
        <div class="item" v-for="element in myArray" :key="element.id">
          {{ element.name }}
        </div>
      </transition-group>
    </draggable>
    <draggable
      v-model="myArray1"
      chosenClass="chosen"
      group="people"
      forceFallback="true"
      animation="1000"
      @start="onStart"
      @end="onEnd"
    >
      <transition-group>
        <div class="item" v-for="element in myArray1" :key="element.id">
          {{ element.name }}
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
// 详情看官网
// ### 拖拽官网
// https://www.itxst.com/vue-draggable/yvq3mifz.html
// https://www.itxst.com/vue-draggable/yvq3mifz.htmlhttps://www.itxst.com/sortablejs/neuinffi.html
//导入draggable组件
import draggable from "vuedraggable";
export default {
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      //定义要被拖拽对象的数组
      myArray: [
        { people: "cn", id: 10, name: "www.itxst.com" },
        { people: "cn", id: 20, name: "www.baidu.com" },
        { people: "cn", id: 30, name: "www.taobao.com" },
      ],
      myArray1: [
        { people: "us", id: 40, name: "www.1.com" },
        { people: "us", id: 50, name: "www.2.com" },
        { people: "us", id: 60, name: "www.3.com" },
        { people: "us", id: 70, name: "www.4.com" },
        { people: "us", id: 80, name: "www.5.com" },
        { people: "us", id: 90, name: "www.6.com" },
      ],
    };
  },
  methods: {
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
/*被拖拽对象的样式*/
.item {
  padding: 6px;
  background-color: #fdfdfd;
  border: solid 1px #eee;
  margin-bottom: 10px;
  cursor: move;
}
/*选中样式*/
.chosen {
  border: solid 1px #3089dc !important;
}
</style>