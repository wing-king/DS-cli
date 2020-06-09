<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>
import { list } from "@/api";
export default {
  methods: {
    async list() {
      const sp = await list();
    }
  },
  mounted() {
    this.list();
  }
};
</script>
<style lang='scss' scoped>
.app {
  font-size: 20px;
  overflow: hidden;
  transition: all 0.2s ease-in;
  box-sizing: border-box;
}
</style>