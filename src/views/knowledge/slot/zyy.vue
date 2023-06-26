<template>
  <div>
    <Child>
      <template #slotzyy="{ user }">
        {{ user.name }}
      </template>
      <template #slotzyyCe="{ user, count }">
        {{ user.name }} {{ count }}
      </template>
      <!-- vue3已废弃   如果插槽是slot='defalut' 可以不写 -->
      <template slot="sslotzyyShi" slot-scope="{ user }">
        {{ user.name }}
      </template>
    </Child>
  </div>
</template>

<script>
import Child from "./components/tem.vue";
export default {
  components: {
    Child,
  },
};
</script>

<style>
</style>