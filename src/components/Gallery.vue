<template>
  <div class="v-gallery">
    <template v-for="img in data">
      <img class="v-gallery-img" :src="img.url" :alt="img.alt" />
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
    required: true,
  },
});

</script>

<style scoped>
.v-gallery {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}
.v-gallery-img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}
</style>
