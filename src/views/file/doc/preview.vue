<template>
  <div>
    <title>doc预览</title>
    <input type="file" @change="change" />
    <!-- 展示docx预览的载体 -->
    <div ref="doc" class="docx"></div>
  </div>
</template>

<script>
// 预览可以使用@vue-office/docx / docx-preview , 前一个和excle一样,暂时不用了,使用docx-preview
import { renderAsync } from "docx-preview";
export default {
  data() {
    return {};
  },
  methods: {
    change(e) {
      const file = e.target.files[0];
      // 文件类型支持blob, arraybuffer
      renderAsync(file, this.$refs.doc);
    },
  },
};
</script>

<style lang='less' scoped>

</style>