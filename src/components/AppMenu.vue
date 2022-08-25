<template>
  <!-- 菜单栏 -->
  <div
    class="appmenu"
    :style="'height: ' + boxHeight + 'px; width: ' + boxWidth + 'px'"
  >
    <div>
      <div class="appmenu-cut" v-on:click="onExpand" />
      <h3>哈</h3>
      <h3>哈</h3>
      <h3>哈</h3>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "AppMenu",
  props: {
    menus: Array,
    index: Number,
    onPress: Function,
  },
  setup() {
    const boxWidth = ref(180);
    const boxHeight = ref(1000);

    onMounted(() => {
      const home = document.getElementById("home-box");
      if (home) {
        boxHeight.value = home.style.height;
      }
    });

    function onPressItem() {}

    function onExpand() {
      boxWidth.value = boxWidth.value == 180 ? 20 : 180;
    }

    return {
      boxWidth,
      boxHeight,
      onExpand,
      onPressItem,
    };
  },
});
</script>
<style scoped>
.appmenu {
  width: 180px;
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  background-color: white;
  transition: all 0.2s ease-in-out;
}
.appmenu-cut {
  width: 20px;
  height: 20px;
  margin: 16px 0;
  border-radius: 50%;
  background-color: orangered;
}
.appmenu:hover {
  transform: translateX(2px);
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
}
</style>
