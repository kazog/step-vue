<template>
  <!-- 空界面 -->
  <div class="empty3">
    <div class="icon" />
    <div class="message" @click="onRefresh">
      {{ value || "暂无相关信息，敬请期待！" }}
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmptyView",
  props: {
    icon: String,
    value: String,
    onRefresh: Function,
  },
});
</script>
<style scoped>
.empty3 {
  width: 100%;
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
}

.icon {
  width: 168px;
  height: 112px;
  background-size: cover;
  /* background-image: url("../assets/icon/empty_ic.png"); */
}
.message {
  padding-top: 16px;
  font-size: 16px;
  color: #c79f62;
}
</style>