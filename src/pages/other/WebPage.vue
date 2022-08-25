<template>
  <!-- 第三方web -->
  <div class="webpage">
    <iframe 
      width="100%" 
      height="100%" 
      frameborder=0
      :src="urlPath"/>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "WebPage",
  setup() {
    const urlPath = ref('https://baidu.com')

    // 界面加载完成之后调用
    onMounted(() => {
      console.log('');
    });
    return {
      urlPath
    };
  },
});
</script>
<style scoped>
.webpage {
  width: 100vw;
  height: 100vh;
}
</style>