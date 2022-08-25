<template>
  <!-- 列表组件 使用：《ListItem v-for="item in itemList" :key="item"/》  -->
  <div id="listView321">
    <div class="list-box321">
      <div :style="'min-height: '+ (top||'0')"/>
      <slot></slot>
      <div :style="'min-height: '+ (bottom||'0')"/>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ListView",
  props: {
    top: Number,
    bottom: Number,
    onRefresh: Function,
    onLoading: Function,
    onScroll: Function,
  },
  setup(props) {
    const interval = 120;
    let statY = 0;
    let endY = 0;
    let isTop = true;
    let isBottom = false;
    let lastTime = 0;

    function onPullDown() {
      if (props.onRefresh) {
        props.onRefresh();
      }
      console.log("=======>onPullDown");
    }

    function onLoadUp() {
      if (props.onLoading) {
        props.onLoading();
      }
      console.log("=======>onLoadUp");
    }

    function onStartTouch(e) {
      statY = e.touches[0].pageY;
      lastTime = Date.now();
      // console.log('we',e.touches[0]);
    }

    function onMoveTouch(e) {
      endY = e.touches[0].pageY;
      // console.log('move',e.touches[0]);
    }

    function onEndTouch() {
      // console.log('s-s:' + Math.abs(endY - statY));
      const time = Date.now() - lastTime > 700;
      if (time && Math.abs(endY - statY) > interval) {
        if (isTop) {
          onPullDown();
        } else if (isBottom) {
          onLoadUp();
        }
      }
    }

    function onScroll() {
      const body = document.getElementById("listView321");
      if (body) {
        body.addEventListener("scroll", () => {
          const movePx = body.scrollTop;
          const divHeight = movePx + body.offsetHeight;
          isTop = movePx === 0;
          isBottom = divHeight - body.scrollHeight > -3;
          // if (movePx - lastY > interval) {
          //   lastY = movePx;
          // } else if (lastY - movePx > interval) {
          //   lastY = movePx;
          // }
          if (props.onScroll) {
            props.onScroll(body.scrollTop);
          }
          // console.log(`--------> ${movePx}, ${divHeight}, ${body.scrollHeight}`);
        });
        body.addEventListener("touchstart", onStartTouch, false);
        body.addEventListener("touchend", onEndTouch, false);
        body.addEventListener("touchmove", onMoveTouch, false);
      }
    }

    onMounted(() => {
      onScroll();
    });
    // return {};
  },
});
</script>
<style scoped>
#listView321 {
  /* top: 0; */
  /* z-index: 0; */
  /* position: absolute; */
  /* width: 100%; */
  height: 100vh;
  max-height: 100vh;
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  overflow: scroll;
}
.list-box321 {
  /* display: flex;
  flex-direction: column; */
  overflow: visible;
  /* display: flex;
  flex-direction: column; */
}
</style>