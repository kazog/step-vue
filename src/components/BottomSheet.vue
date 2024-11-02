<template>
  <div class="v-sheet">
    <div class="v-sheet-box">
      <div class="v-sheet-header">
        <button>取消</button>
        <h3>{{props.title}}</h3>
        <button class="v-sheet-header ok">确定</button>
      </div>
      <div class="v-sheet-list">
        <template v-for="item in 30">
          <span class="v-sheet-item">{{ item }}</span>
        </template>
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
  data: {
    type: Array,
    required: false,
    default: [],
  },
});

</script>

<style scoped>
.v-sheet {
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
.v-sheet-box {
  width: 100vw;
  height: 500px;
  border-radius: 16px 16px 0 0;

  display: flex;
  flex-direction: column;
  background-color: white;
}
.v-sheet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  border-bottom: 1px solid #e3e3e3;
}
.v-sheet-header button {
  background-color: transparent;
  border: none;
  color: #4E5969;
  font-size: 16px;
  padding: 0 16px;
  /* cursor: pointer; */
}
.v-sheet-header.ok {
  color: #007AFF;
}
.v-sheet-header h3 {
  color: #1D2129;
  font-size: 18px;
  font-weight: 500;
}

.v-sheet-list {
  flex: 1;
  padding: 0 16px;
  overflow-y: scroll;
  
  display: flex;
  flex-direction: column;
}
.v-sheet-list::-webkit-scrollbar {
  display: none;
}
.v-sheet-item {
  color: #1D2129;
  font-size: 16px;
  line-height: 1.2;
  padding: 12px 0;
  border-bottom: 1px solid red;
}
.v-sheet-item:last-child {
  border-bottom: none;
}
</style>
