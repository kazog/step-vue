<template>
  <div class="v-row">
    
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: false,
  },
});

</script>

<style scoped>
.v-row {
  display: flex;
  flex-direction: row;
}
</style>
