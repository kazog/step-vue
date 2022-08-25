<template>
  <!-- 测试 -->
  <div>asd</div>
</template>
<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "Test",
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