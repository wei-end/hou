<template>
  <div>
    <title>表单封装</title>
    <formVue :form="form" />
    <el-button @click="look">看form值</el-button>
    <hr />
    <hr />
    <hr />
    <vmodel v-model="formModel" />
    <p>{{formModel.name}}</p>
    <p>{{formModel.value}}</p>
  </div>
</template>

<script>
import formVue from "./components/formv_bind.vue";
import vmodel from "./components/fomev_model.vue";
export default {
  components: {
    formVue,
    vmodel,
  },
  data() {
    return {
      form: {
        input: "",
        select: "",
      },
      formModel: {
        name: "",
        value: "",
      },
      name: "",
    };
  },
  methods: {
    look() {
      console.log(this.form);
    },

  },
};
</script>

<style>
</style>