<template>
  <div>
    <div class="header32121" :style="background||''">
      <img class="header-logo-ic" />
      <span class="header-title">{{ title || "标题" }}</span>
      <div class="header-icon-ic" />
    </div>
    <div v-if="isFixed" style="height: 50px" />
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  props: {
    icon: String,
    back: Boolean,
    title: String,
    fixed: String,
    background: String,
    onBack: Function,
  },
  setup(props) {
    const isFixed = (props.fixed|| 'true') == "true"
    function onBack() {
      if (props.onBack) {
        props.onBack();
      }
    }
    function onShare() {}

    return {
      isFixed,
      onBack,
      onShare,
    };
  },
});
</script>
<style scoped>
.header32121 {
  top: 0;
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  background-color: black;
  transition: all 0.2s ease-in-out;
  /* background: linear-gradient(0, #f7b332, #fa7724); */
}
.header32121:hover {
  transform: translateY(-1px);
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3);
}
.header-logo-ic {
  width: 32px;
  height: 32px;
  margin-left: 16px;
  background-color: white;
}
.header-title {
  flex: 1;
  margin-left: 24px;
  font-weight: 500;
  font-size: 18px;
  color: white;
}
.header-icon-ic {
  width: 32px;
  height: 32px;
  margin-right: 16px;
  background-color: white;
}
</style>