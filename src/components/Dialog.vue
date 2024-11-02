<template>
  <div class="v-dialog">
    <div class="v-dialog-box">

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: false,
    default: [],
  },
});

</script>

<style scoped>
.v-dialog {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 996;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.6);
}
.v-dialog-box {
  width: 340px;
  height: 200px;
  border-radius: 12px;
  background-color: white;
}
</style>
