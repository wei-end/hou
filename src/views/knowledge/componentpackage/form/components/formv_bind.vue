<template>
  <div>
    <el-form>
      <el-input v-model="form.input"></el-input>
    </el-form>
    <el-button @click="form = {}">修改父组件的值试试</el-button>
    <el-button @click="form.input = '张三'">修改父组件的属性值试试</el-button>
  </div>
</template>

<script>
export default {
  props: {
    //form作为一个对象传参过来 , 如果修改里面的属性属性值,不会报子组件修改父组件的错误,但是如果直接修改父组件的传过来的对象则会报错
    //这种并不是很好,因为会导致项目难维护,例子就是多个子组件引入该对象,会导致属性值修改进行覆盖,最好回调用父组件同一控制
    form: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style>
</style>