<template>
  <div class="v-searchbar">
    <div class="v-input-box">
      <img class="v-search-ic" alt="Search Icon" />
      <input class="v-search-input" type="text" placeholder="Search Product" />
    </div>
    <button class="v-search-btn">Search</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  keywrod: {
    type: String,
    default: '',
  },
});

</script>

<style scoped>
.v-searchbar {
  width: 100%;
  height: 44px;
  display: flex;
  flex-direction: row;
  background-color: white;
}
.v-input-box {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin: 0 8px 0 16px;
  border-radius: 6px;
  background-color: #f3f3f3;
}
.v-search-ic {
  width: 18px;
  height: 18px;
  background-color: coral;
}
.v-search-input {
  flex: 1;
  margin-left: 8px;
  padding: 0;
  border: none;
  background-color: transparent;
}
.v-search-btn {
  margin-right: 16px;
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  background-color: #f0f0f0;
}
</style>
