<template>
  <!-- 滑动组件-未完成 -->
  <div class="tab-body">
    <div class="tab-view" v-for="(tab, index) in tabs" v-bind:key="tab" @click="onPress(index)">
      <div style="position: relative;">
        <span :style="'line-height: 18px;' + (tabIndex == index ? '':'color: #232323;')">{{tab}}</span>
      </div>
      <div v-if="tabIndex == index" class="tab-line" />
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TabLayout2",
  props: {
    tabs: Array,
    onChange: Function,
    tabIndex: Number,
  },
  setup(props) {
    let tabIndex = ref(props.tabIndex||0);
    console.log('从父组件中传到的值',props.tabIndex)
    function onPress(num) {
      tabIndex.value = num;
      if(props.onChange) {
        props.onChange(num);
      }
    }

    return {
      tabIndex,
      onPress,
    };
  },
});
</script>
<style scoped>
.tab-body {
  width: 100vw;
  max-height: 47px;
  display: flex;
  flex-direction: row;
  background-color: white;
  border-bottom: 1px solid #eeeeee;
  z-index: 9;

  font-size: 16px;
  /* font-family: PingFangSC-Medium, PingFang SC; */
  /* font-weight: 500; */
  color: #fa7724;
}
.tab-name {
  color: #232323;
}
.tab-view {
  flex: 1;
  height: 46px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* z-index: 9; */
}
.tab-line {
  position: absolute;
  width: 64px;
  height: 2px;
  bottom: 0;
  border-radius: 1px;
  background: linear-gradient(90deg, #fc4a1a, #f7b733);
}
</style>