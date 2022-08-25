<template>
  <!-- 首页 -->
  <div class="home">
    <Header />
    <div id="home-box" class="row home-box">
      <AppMenu />
      <div class="box">
        <div>sdfs</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";

import Header from "../../components/Header.vue";
import AppMenu from "../../components/AppMenu.vue";
import { login, downFile } from "../../modules/apis/index";

export default defineComponent({
  name: "Home",
  components: {
    Header,
    AppMenu,
  },
  setup() {
    // 界面加载完成之后调用
    onMounted(() => {
      downFile(
        "https://gitee.com/kzvoa/step-vue/blob/master/src/modules/net/network.js"
      );
      console.log("--");
      login({ name: "123u90", password: "1234567890" });
    });
    return {};
  },
});
</script>
<style scoped>
.home {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.home-box {
  flex: 1;
}
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
}
</style>
