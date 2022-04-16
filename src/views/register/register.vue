<template>
  <div id="Register" class="h-screen flex items-center justify-center">
    <div
      class="bg-white shadow-md border rounded-lg p-8 mx-auto w-full max-w-sm"
    >
      <form class="space-y-6">
        <h3 class="text-xl">登录到我们的平台</h3>
        <div>
          <label for="name" class="text-sm">用户名</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="register.name"
          />
        </div>
        <div>
          <label for="username" class="text-sm">账号</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="register.username"
          />
        </div>
        <div>
          <label for="password" class="text-sm">密码</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="register.password"
          />
        </div>
        <div>
          <label for="con_password" class="text-sm">确认密码</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="register.con_password"
          />
        </div>
        <!-- 注册按钮 -->
        <button
          class="
            w-full
            text-white
            bg-blue-700
            hover:bg-blue-800
            rounded-lg
            text-sm
            py-2.5
          "
          @click="adduser"
        >
          注册
        </button>
        <!-- 创建用户 -->
        <div class="text-sm text-gray-500">
          <span>已有账号?</span>
          <router-link class="text-blue-700 hover:underline" to="/login">
            去登录
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { addUserInfo } from '@/apis/user';

export default defineComponent({
  name: 'Register',
  setup() {
    let register = reactive({
      name: '',
      username: '',
      password: '',
      con_password: '',
    });
    const adduser = () => {
      console.log('ttttt', register);
    };
    return {
      adduser,
    };
  },
});
</script>
