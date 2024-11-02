<template>
  <div id="bannerId" class="v-banner">
    <template v-for="(item, index) in props.data" :key="item">
      <div class="v-banner-item" :style="getStyle(index)">{{ item }}</div>
    </template>
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
const width = window.innerWidth;

onMounted(() => {
  const div = document.getElementById('bannerId');
  if (div) {
    div.addEventListener('scroll', (e) => {
      const scrollLeft = e.target.scrollLeft;
      const index = Math.round(scrollLeft /width);
      if (curIndex.value !== index) {
        curIndex.value = index;

        console.log('index', curIndex.value);
      }
    });

    div.scrollTo(width*(props.index || 0), 0);
  };
});

function getStyle(index) {
  const offset = Math.abs(index - curIndex.value);
  const aplha = 1 - Math.min(offset, 3) * 0.2;
  return `opacity: ${aplha};`;
}

</script>

<style scoped>
.v-banner {
  width: 100vw;
  height: 180px;
  display: flex;
  position: relative;
  overflow-x: scroll;
  /* scroll-snap-type: y mandatory/proximity; */
  scroll-snap-type: x mandatory;
  background-color: #f3f3f3;
  border-radius: 8px;
}

.v-banner::-webkit-scrollbar {
  display: none;
}

.v-banner-item {
  width: 100vw;
  height: 180px;
  min-width: 100vw;
  scroll-snap-align: center;
}
</style>
