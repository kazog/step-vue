<template>
  <!-- 登录 -->
  <div class="login page">
    <img
      class="login-bg"
      alt="背景"
      src="https://cn.bing.com/th?id=OHR.Invergarry_ZH-CN9013535988_1920x1080.jpg"
    />
    <div class="login-box">
      <div class="item row">
        <span class="label">用户名</span>
        <input class="input" maxlength="28" placeholder="请输入用户名" />
      </div>
      <div class="item row">
        <span class="label">密码</span>
        <input
          class="input"
          placeholder="请输入用户名"
          maxlength="28"
          type="password"
        />
      </div>
      <div class="login-btn button" v-on:click="onLogin">登 录</div>
      <div class="row alert-box">
        <span class="alert-text button">忘记密码?</span>
        <span class="alert-text button">注册账号</span>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import Route from '../../utils/navigate'

export default defineComponent({
  name: "Login",
  setup() {
    // 界面加载完成之后调用
    onMounted(() => {
      console.log("--");
    });


    function onLogin() {
      Route.get().replace('/')
    }
    return {
      onLogin
    };
  },
});
</script>
<style scoped>
.login {
  min-width: 600px;
  align-items: flex-end;
  justify-content: center;
}
.login-bg {
  background-position: center;
  background-size: cover;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.login-box {
  z-index: 3;
  width: 360px;
  height: 240px;
  padding: 24px 32px;
  margin-right: 128px;
  margin-bottom: 128px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 1);
  transition: all 0.2s ease-in-out;
  opacity: 0.7;
}

.login-box:hover {
  transform: translateY(-5px);
  opacity: 1;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.5);
}

.item {
  height: 56px;
  margin-bottom: 8px;
  align-items: center;
}
.label {
  min-width: 72px;
  color: #121212;
  font-size: 16px;
  font-weight: 500;
}
.input {
  flex: 1;
  color: #121212;
  font-size: 16px;
  font-weight: 500;
  line-height: 40px;
  border: none;
  background-color: transparent;
}
.input:hover {
  border: none;
}
.login-btn {
  height: 46px;
  color: white;
  font-size: 18px;
  text-align: center;
  line-height: 46px;
  margin-top: 32px;
  margin-bottom: 12px;
  border-radius: 22px;
  background-color: rgba(0, 0, 0, 0.9);
}
.alert-box {
  justify-content: space-between;
}
.alert-text {
  color: #636363;
  font-size: 14px;
}
</style>
