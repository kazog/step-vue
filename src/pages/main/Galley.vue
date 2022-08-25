<template>
  <!-- 首页 -->
  <div class="galley">
    <Header />
    <img
      class="galley-bg"
      alt="背景"
      src="https://cn.bing.com/th?id=OHR.BlackSun_ZH-CN0889682619_1920x1080.jpg"
    />
    <div class="row galley-banner">
      <div class="galley-banner-left"></div>
      <div class="galley-banner-item"></div>
      <div class="galley-banner-left"></div>
    </div>

    <div class="galley-grid">
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
      <div class="galley-grid-item"></div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import Header from "../../components/Header.vue";

export default defineComponent({
  name: "Galley",
  components: {
    Header,
  },
  setup() {
    // 界面加载完成之后调用
    onMounted(() => {
      console.log("--");
    });
    return {};
  },
});
</script>
<style scoped>
.galley {
}
.galley-bg {
  width: 100%;
  height: 100%;
  background-size: contain;
  position: absolute;
  top: 0;
}
.galley-banner {
  background-color: turquoise;
}
.galley-banner-item {
  z-index: 1;
  width: 100vw;
  min-width: 1340px;
  height: 670px;
  background-color: rgba(255, 99, 71, 0.8);
}
.galley-banner-left {
  width: 56px;
}

.galley-grid {
  z-index: 3;
  display: grid;
  padding: 32px 0;
  grid-gap: 32px 32px;
  justify-content: center;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-template-columns: repeat(3, 500px);
}

.galley-grid-item {
  z-index: 3;
  width: 500px;
  height: 300px;
  border-radius: 8px;
  background-color: rgba(138, 43, 226, 0.9);
  transition: all 0.2s ease-in-out;
}

.galley-grid-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
}

.galley-test {
  z-index: 3;
  color: white;
}
</style>
