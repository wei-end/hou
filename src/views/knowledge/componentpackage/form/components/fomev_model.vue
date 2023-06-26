<template>
  <div>
    <el-form>
      <el-input v-model="localValue.name" @input="handleInput"> </el-input>
      <el-input v-model="localValue.value" @input="handleInput"> </el-input>
    </el-form>
    <el-button @click="localValue = {}">修改</el-button>
  </div>
</template>

<script>
export default {
  props: {
    value: Object,
  },
  // computed: {
  //   localValue: {
  //     get() {
  //       let _vm = this;
  //       return new Proxy(this.value, {
  ////get可以不写
  //         get(obj, name) {
  //           return obj[name];
  //         },
  //         set(obj, name, val) {
  //           _vm.$emit("input", {
  //             ...obj,
  //             [name]: val,
  //           });
  //           return true;
  //         },
  //       });
  //     },
  //     set(newvalue) {
  //       console.log(newvalue);
  //       this.$emit("input", newvalue);
  //     },
  //   },
  // },
  //缺点就是每个el-input都要添加事件,不如上面的
  computed: {
    localValue: {
      get() {
        return this.value;
      },
      set(newvalue) {
        this.$emit("input", newvalue);
      },
    },
  },
  mounted() {
    console.log(this.value);
  },
  methods: {
    handleInput() {
      this.$emit("input", { ...this.localValue });
    },
  },
};
</script>

<style>
</style>