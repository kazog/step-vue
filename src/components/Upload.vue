<template>
  <div class="v-upload">
    <template v-for="img in data">
      <img class="v-upload-img" :src="img.url" :alt="img.alt" />
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
.v-upload {
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
}
.v-upload-img {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
}
</style>
