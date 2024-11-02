<template>
  <div class="v-picker">
    <div id="pickerId" class="v-picker-list">
      <div class="v-picker-item2"></div>
      <template v-for="(item, index) in props.data" :key="item">
        <div class="v-picker-item" :style="getStyle(index)">{{ item }}</div>
      </template>
      <div class="v-picker-item2"></div>
    </div>
    <div class="v-picker-mark"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const curIndex = ref(0);

onMounted(() => {
  const div = document.getElementById('pickerId');
  if (div) {
    div.addEventListener('scroll', (e) => {
      const scrollTop = e.target.scrollTop;
      const index = Math.round(scrollTop / 40);
      if (curIndex.value !== index) {
        curIndex.value = index;

        console.log('index', curIndex.value);
      }
    });

    div.scrollTo(0, 40 * (props.index||0));
  };
});

function getStyle(index) {
  const offset = Math.abs(index - curIndex.value);
  const aplha = 1 - Math.min(offset, 3) * 0.2;
  const scale = 1 - offset * 0.1;
  return `opacity: ${aplha}; transform: scale(${scale});`;
}

</script>

<style scoped>
.v-picker {
  height: 200px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.v-picker-list {
  z-index: 3;
  overflow-y: scroll;
  /* scroll-snap-type: y mandatory/proximity; */
  scroll-snap-type: y mandatory;
}

.v-picker-list::-webkit-scrollbar {
  display: none;
}

.v-picker-item {
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #232323;
  font-size: 16px;
  scroll-snap-align: center;
}

.v-picker-item2 {
  height: 80px;
}

.v-picker-mark {
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #F1F4F9;
}
</style>
