<template>
  <div class="v-header">
    <div class="v-header-actions" @click="onBack">
      <span>返回</span>
    </div>
    <div class="v-header-title">首页</div>
    <div class="v-header-actions v-header-actions2" @click="onBack">
      <span>返回</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  actions: {
    type: Array,
    default: () => [],
  },
});

function onBack() {
  console.log('onBack');
}

</script>

<style scoped>
.v-header {
  width: 100vw;
  height: 50px;
  top: 0;
  left: 0;
  z-index: 997;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ff9900;
}

.v-header-title {
  color: #232323;
  font-size: 20px;
  font-weight: 600;
}

.v-header-actions {
  min-width: 64px;
  margin: 0 16px;
  display: flex;
  align-items: center;
}
.v-header-actions2 {
  justify-content: flex-end;
}
</style>
