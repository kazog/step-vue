<template>
  <!-- 空界面 -->
  <div class="dialogs">
    <div class="layout">
      <h2>{{ title || "温馨提示" }}</h2>
      <div class="message">{{ content }}</div>
      <div class="actions">
        <div class="cancel but" @click="onCancel">取消</div>
        <div class="line"/>
        <div class="ok but" @click="onOK">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppDialog",
  props: {
    title: String,
    content: String,
    onPress: Function,
  },
  setup(props) {
    function onCancel() {
      if (props.onPress) {
        props.onPress(-1);
      }
    }

    function onOK() {
      if (props.onPress) {
        props.onPress(0);
      }
    }
    return {
      onOK,
      onCancel,
    };
  },
});
</script>
<style scoped>
.dialogs {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);

  position: absolute;
  bottom: 0;
  z-index: 9999999;
}

.layout {
  width: 320px;
  height: 210px;
  border-radius: 8px;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
}
.message {
  flex: 1;
  width: 280px;

  color: #333333;
  font-size: 16px;
}

.actions {
  width: 100%;
  color: #333333;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  border-top: solid #eeeeee 1px;
}
.cancel {
  flex: 1;
  line-height: 45px;
  

  text-align: center;
}
.line {
  height: 100%;
  width: 1px;
  background-color: #eeeeee;
}
.ok {
  flex: 1;
  line-height: 45px;
  text-align: center;

  font-weight: 700;
}

.but:active {
  opacity: 0.87;
  transform: scale(0.97, 0.97);
  background-color: #00000010;
}
</style>