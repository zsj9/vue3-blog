<template>
  <div id="Login" class="h-screen flex items-center justify-center">
    <div
      class="bg-white shadow-md border rounded-lg p-8 mx-auto w-full max-w-sm"
    >
      <form class="space-y-6" action="#" @submit.prevent="login">
        <h3 class="text-xl">登录到我们的平台</h3>
        <div>
          <label for="email" class="text-sm">账号</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="user.username"
          />
        </div>
        <div>
          <label for="password" class="text-sm">密码</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="user.password"
            type="password"
          />
        </div>
        <!-- 记住密码、忘记密码 -->
        <div class="flex items-start justify-between">
          <div class="flex items-center">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              class="h-4 w-4"
              v-model="user.remember"
            />
            <label for="remember" class="text-sm ml-3">记住密码</label>
          </div>
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
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { userLogin } from '@/apis/user';
import * as Base64 from 'js-base64';
// hooks
import toast from '@/hooks/useToast';

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();

    let user = reactive({
      username: '',
      password: '',
      remember: false,
    });

    if (localStorage.getItem('username')) {
      user.username = localStorage.getItem('username') || '';
    }
    if (localStorage.getItem('password')) {
      user.remember = true;
      user.password = localStorage.getItem('password') || '';
    }

    const login = () => {
      let password = user.password;
      if (localStorage.getItem('password')) {
        let base = localStorage.getItem('password')?.split('Bting')[1];
        password = Base64.decode(base || '');
      }
      userLogin({ username: user.username, password }).then(res => {
        if (res.code === 200) {
          sessionStorage.setItem('token', res.data.token);
          localStorage.setItem('username', user.username);
          sessionStorage.setItem('userid', Base64.encode(res.data.id));
          if (user.remember) {
            localStorage.setItem('password', 'Bting' + Base64.encode(password));
          }
          router.push('/');
        } else {
          toast({ message: res.msg, status: 'error' });
        }
      });
    };
    return {
      // 变量
      user,
      // 函数
      login,
    };
  },
});
</script>
