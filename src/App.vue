<template>
  <router-view></router-view>
  <div id="rootId"></div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
  },
  watch: {},
  setup() {
    return {};
  },
});
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #363636;
  font-weight: 400;
}
#rootId {
  display: flex;
  flex-direction: column;
  z-index: 99999;
}
</style>
