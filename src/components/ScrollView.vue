<template>
  <!-- 滑动组件-未完成 -->
  <div
    id="scrollView321"
    :style="'flex-direction: ' + direction + '; min-height:' + height + '; height:' + height + '; width:' + width">
    <slot></slot>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "ScrollView",
  props: {
    height: Number,
    width: Number,
    orientation: String,
    onScroll: Function,
  },
  setup(props) {
    const direction = props.orientation || "column";
    const width = props.width || "100%";
    const height = props.height || "100%";

    function onStartTouch(e) {
      // console.log(e)
      // console.log(startY)
    }

    function onMoveTouch(e) {
      // endY = e.changedTouches[0].pageY;
      // console.log('moveY------>'+moveY)
      // console.log('mY------>'+Y)
    }

    function onEndTouch() {
      // moveY += (endY - startY)
      // console.log('endY------>'+moveY)
    }

    function onScroll() {
      const body = document.getElementById("scrollView321");
      if (body) {
        body.addEventListener("scroll", () => {
          if (direction === "row") {
            srcollX(body);
          } else {
            srcollY(body);
          }
          // console.log("-------->",body.offsetTop, divHeight, body.scrollHeight);
        });
        // body.addEventListener("touchstart", onStartTouch, false);
        // body.addEventListener("touchend", onEndTouch, false);
        // body.addEventListener("touchmove", onMoveTouch, false);
      }
    }

    function srcollY(body) {
      const moveY = body.scrollTop;
      // const divHeight = moveY + body.offsetHeight;
      // console.log('moveY------>'+moveY)
      if(props.onScroll){
        props.onScroll(moveY);
      }
    }

    function srcollX(body) {
      const moveX = body.scrollWidth;
      // const divHeight = moveX + body.offsetWidth;
      // console.log('moveX------>'+moveX)
      if(props.onScroll){
        props.onScroll(moveX);
      }
    }

    onMounted(() => {
      onScroll();
    });
    return {
      width,
      height,
      direction,
    };
  },
});
</script>
<style scoped>
#scrollView321 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: scroll;
}
</style>