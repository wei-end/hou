<template>
  <div>
    <DiyForm :formArr="formArr" :formValue="formValue">
      <template #picker="{ item }">
        <el-time-picker
          v-model="formValue[item.props]"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00',
          }"
          placeholder="任意时间点"
        >
        </el-time-picker>
      </template>
    </DiyForm>
    <el-button @click="ceshi">测试</el-button>
  </div>
</template>

<script>
import DiyForm from "./component/DiyForm.vue";
export default {
  components: {
    DiyForm,
  },
  data() {
    return {
      formArr: [
        {
          label: "输入框",
          props: "input",
          type: "input",
        },
        {
          label: "下拉框",
          props: "select",
          type: "select",
          option: [
            {
              name: "张三",
              value: "0",
            },
            {
              name: "李四",
              value: "1",
            },
          ],
        },
        {
          label: "日期",
          props: "picker",
          type: "slot",
          name: "picker",
        },
      ],
      formValue: {
        input: "张三",
        select: "0",
        picker: "",
      },
    };
  },
  methods: {
    ceshi() {
      console.log(this.formValue);
    },
  },
};
</script>

<style>
</style>