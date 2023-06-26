<template>
  <div>
    <title>中英文切换</title>
    <span>{{ $t("welcome") }}</span>
    <button @click="switchLang">{{ $t("switchLang") }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "zh-CN",
    };
  },
  methods: {
    switchLang() {
      if (this.lang === "zh-CN") {
        this.lang = "en-US";
      } else {
        this.lang = "zh-CN";
      }
      this.$i18n.locale = this.lang;
    },
  },
};
</script>

<style>
</style>