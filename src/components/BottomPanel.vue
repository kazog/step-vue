<template>
  <div class="v-panel">
    <div class="v-panel-box">
      <div class="v-panel-header">
        <button>取消</button>
        <h3>{{props.title}}</h3>
        <button class="v-panel-header ok">确定</button>
      </div>
      <div class="v-panel-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: '',
  },
});

</script>

<style scoped>
.v-panel {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 996;
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.6);
}
.v-panel-box {
  width: 100vw;
  height: 500px;
  border-radius: 16px 16px 0 0;

  display: flex;
  flex-direction: column;
  background-color: white;
}
.v-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid #e3e3e3;
}
.v-panel-header button {
  background-color: transparent;
  border: none;
  color: #4E5969;
  font-size: 16px;
  padding: 0 16px;
  /* cursor: pointer; */
}
.v-panel-header.ok {
  color: #007AFF;
}
.v-panel-header h3 {
  color: #1D2129;
  font-size: 18px;
  font-weight: 500;
}

.v-panel-content {
  flex: 1;
  padding: 0 16px;
  
  display: flex;
  flex-direction: column;
}
</style>
