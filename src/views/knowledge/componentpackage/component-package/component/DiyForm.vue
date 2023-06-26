<template>
  <div>
    <el-form>
      <el-form-item
        v-for="(item, index) in formArr"
        :key="index"
        :label="item.label"
      >
        <template v-if="item.type !== 'slot'">
          <component :is="'el-' + item.type" v-model="formValue[item.props]">
            <template v-if="item.type == 'select'">
              <el-option
                v-for="(item, index) in item.option"
                :key="index"
                :label="item.name"
                :value="item.value"
              ></el-option>
            </template>
          </component>
        </template>
        <template v-else>
          <slot :name="item.name" :item='item'></slot>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "DiyForm",
  props: {
    formArr: {
      type: Array,
      default: () => [],
    },
    formValue: {
      type: Object,
      default: () => ({
      }),
    },
  },
};
</script>

<style>
</style>