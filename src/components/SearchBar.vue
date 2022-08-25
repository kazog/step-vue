<template>
  <!-- 搜索框 -->
  <div class="searchbar">
    <div class="box">
      <img class="icon" src="" />
      <div @click="onSearch" class="input">
        {{ text || "搜索省/市/区域名称" }}
      </div>
    </div>
    <div v-if="text" class="btn" @click="onClick">确定</div>
    <div v-else class="btn" @click="onBack">取消</div>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  props: {
    text: String,
    placeholder: String,
    onClick: Function,
    onSearch: Function,
  },
  setup() {
    function onBack() {
    }
    return {
      onBack,
    };
  },
});
</script>
<style scoped>
.searchbar {
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #ebebeb;
}

.box {
  flex: 1;
  height: 36px;
  margin-left: 16px;
  border-radius: 18px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  background-color: white;
}

.btn {
  padding: 16px;
  display: flex;
  align-items: center;
}

.input {
  flex: 1;
  color: #232323;
  font-size: 16px;
  /* border: solid 0 transparent; */
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 6px;
  color: #333333;
  font-size: 16px;
}
</style>