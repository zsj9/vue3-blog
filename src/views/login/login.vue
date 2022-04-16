<template>
  <div id="Login" class="h-screen flex items-center justify-center">
    <div
      class="bg-white shadow-md border rounded-lg p-8 mx-auto w-full max-w-sm"
    >
      <form class="space-y-6" action="#">
        <h3 class="text-xl">登录到我们的平台</h3>
        <div>
          <label for="email" class="text-sm">账号</label>
          <input class="border border-gray-300 rounded-lg w-full p-2.5" />
        </div>
        <div>
          <label for="password" class="text-sm">密码</label>
          <input class="border border-gray-300 rounded-lg w-full p-2.5" />
        </div>
        <!-- 记住密码、忘记密码 -->
        <div class="flex items-start justify-between">
          <div class="flex items-center">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="h-4 w-4"
            />
            <label for="remember" class="text-sm ml-3">记住密码</label>
          </div>
          <a href="#" class="text-sm text-blue-700 hover:underline">
            忘记密码?
          </a>
        </div>
        <!-- 登录按钮 -->
        <button
          type="submit"
          class="
            w-full
            text-white
            bg-blue-700
            hover:bg-blue-800
            rounded-lg
            text-sm
            py-2.5
          "
        >
          登录
        </button>
        <!-- 创建用户 -->
        <div class="text-sm text-gray-500">
          <span>未注册?</span>
          <router-link class="text-blue-700 hover:underline" to="/register">
            创建帐户
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  setup() {
    return {};
  },
});
</script>
