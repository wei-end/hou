<template>
  <div>
    <i class="el-icon-search" @click.stop="searchClick"></i>
    <el-select
      size="small"
      v-show="searchShow"
      v-model="selectValue"
      filterable
      remote
      :remote-method="remoteMethod"
      default-first-option
      @change="change"
      :loading="loading"
      ref="elselect"
    >
      <el-option
        v-for="(item, index) in options"
        :key="index"
        :label="item.item.title"
        :value="item.item.path"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
//模糊搜索依赖包
import Fuse from "fuse.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      options: [],
      selectValue: "",
      loading: false,
      fuse: undefined,
      searchPool: [],
      searchShow: false,
    };
  },
  computed: {
    ...mapState({
      asyncRoutes: (state) => state.layout.asyncRoutes,
    }),
  },
  watch: {
    asyncRoutes: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.searchPool = this.handleasyncRoutes(this.asyncRoutes);
        }
      },
      immediate: true,
      deep: true,
    },
    searchPool: {
      handler(newVal, oldVal) {
        if (newVal) {
          this.initFuse(this.searchPool);
        }
      },
    },
    searchShow(val) {
      if (val) {
        document.body.addEventListener("click", this.close);
      } else {
        document.body.removeEventListener("click", this.close);
      }
    },
  },
  created() {
    this.searchPool = this.handleasyncRoutes(this.asyncRoutes);
  },
  methods: {
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        //模糊搜索查询方法
        this.options = this.fuse.search(query);
        this.loading = false;
      }
    },
    change(value) {
      //el-option不会触发全局的document.body绑定的事件
      console.log(value, this.searchShow);
      if (this.$route.path != value) {
        this.$router.push(value);
      }
    },
    //递归处理
    handleasyncRoutes(list) {
      let res = [];
      list.forEach((item) => {
        if (!item.children || item.children.length == 0) {
          res.push({
            title: item.meta.title,
            path: item.index,
          });
        } else {
          let callback = this.handleasyncRoutes(item.children);
          res = [...res, ...callback];
        }
      });
      return res;
    },
    initFuse(list) {
      //模糊搜索使用方式
      this.fuse = new Fuse(list, {
        shouldSort: true,
        threshold: 0.4,
        location: 0,
        distance: 100,
        minMatchCharLength: 1,
        keys: [
          {
            name: "title",
            weight: 0.7,
          },
          {
            name: "path",
            weight: 0.3,
          },
        ],
      });
    },
    searchClick() {
      this.searchShow = !this.searchShow;
      if (this.searchShow) {
        document.body.addEventListener("click", this.close);
        this.$nextTick(() => {
          this.$refs.elselect && this.$refs.elselect.focus();
        });
      }
    },
    close() {
      this.options = [];
      this.$nextTick(() => {
        this.$refs.elselect && this.$refs.elselect.blur();
        this.searchShow = false;
      });
    },
  },
};
</script>

<style>
</style>