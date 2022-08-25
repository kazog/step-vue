<template>
  <!-- 404 -->
  <div>404</div>
</template>
<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Notfound",
  setup() {
    // 界面加载完成之后调用
    onMounted(() => {
      console.log('--');
    });
    return {};
  },
});
</script>
<style scoped>
</style>