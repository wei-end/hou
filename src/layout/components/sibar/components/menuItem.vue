<template>
  <div>
    <template v-for="(item, index) in lists">
      <el-menu-item
        :index="item.index"
        :key="index"
        v-if="!item.children || item.children.length == 0"
      >
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.meta.title }}</span>
      </el-menu-item>
      <el-submenu :key="index" v-else :index="item.index">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{ item.meta.title }}</span>
        </template>
        <menuItem :lists="item.children" />
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: "menuItem",
  props: ["lists"],
};
</script>

<style>
/*由于 element-ui 的<el-menu>标签本身希望里面嵌套的是<el-menu-item>,<el-submenu>,<el-menu-item-group>之一，但是使用了递归组件进行渲染,多在顶部嵌套了一层<div>,而导致收折就隐藏不了文字*/
/*隐藏文字*/
.el-menu--collapse .el-submenu__title span {
  display: none;
}
/*隐藏 > */
.el-menu--collapse .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>