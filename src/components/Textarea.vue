<template>
  <div class="v-row">
    <textarea
      class="v-textarea"
      :placeholder="props.placeholder"
      :value="props.value"
      @input="props.onInput"
    ></textarea>
  </div>
</template>

<script setup>
import { ref } from 'vue';

function onInput(event) {
  // props.onInput(event.target.value);
}

const props = defineProps({
  tabs: {
    type: Array,
    required: false,
  },
});

</script>

<style scoped>
.v-textarea {
  display: flex;
  flex-direction: row;
}
</style>
