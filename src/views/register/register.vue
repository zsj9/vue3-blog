<template>
  <div class="h-screen flex items-center justify-center">
    <div
      class="bg-white shadow-md border rounded-lg p-8 mx-auto w-full max-w-sm"
    >
      <form class="space-y-6" @submit.prevent="createUser">
        <h3 class="text-xl">登录到我们的平台</h3>
        <div>
          <label for="name" class="text-sm">用户名</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="register.name"
            type="text"
          />
          <p
            class="text-red-500 text-xs italic"
            v-show="registerValidate.nameError"
          >
            {{ registerValidate.nameError }}
          </p>
        </div>
        <div>
          <label for="username" class="text-sm">账号</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="register.username"
            type="text"
          />
          <p
            class="text-red-500 text-xs italic"
            v-show="registerValidate.usernameError"
          >
            {{ registerValidate.usernameError }}
          </p>
        </div>
        <div>
          <label for="password" class="text-sm">密码</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="register.password"
            type="password"
          />
          <p
            class="text-red-500 text-xs italic"
            v-show="registerValidate.passwordError"
          >
            {{ registerValidate.passwordError }}
          </p>
        </div>
        <div>
          <label for="con_password" class="text-sm">确认密码</label>
          <input
            class="border border-gray-300 rounded-lg w-full p-2.5"
            v-model="register.con_password"
            type="password"
          />
          <p
            class="text-red-500 text-xs italic"
            v-show="registerValidate.con_passwordError"
          >
            {{ registerValidate.con_passwordError }}
          </p>
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
import { useRouter } from 'vue-router';

import { userRegister } from '@/apis/user';

// hooks
import toast from '@/hooks/useToast';

export default defineComponent({
  name: 'Register',
  setup() {
    const router = useRouter();

    let register = reactive({
      name: '',
      username: '',
      password: '',
      con_password: '',
    });

    let registerValidate = reactive({
      nameError: '',
      usernameError: '',
      passwordError: '',
      con_passwordError: '',
    });

    const createUser = () => {
      registerValidate.nameError = !register.name ? '请输入用户名' : '';
      registerValidate.usernameError = !register.username ? '请输入账号' : '';
      registerValidate.passwordError = !register.password ? '请输入密码' : '';
      registerValidate.con_passwordError =
        register.password !== register.con_password ? '密码不一致' : '';
      if (
        registerValidate.nameError ||
        registerValidate.usernameError ||
        registerValidate.passwordError ||
        registerValidate.con_passwordError
      ) {
        return;
      }
      userRegister({
        name: register.name,
        username: register.username,
        password: register.password,
      }).then(res => {
        if (res.code === 200) {
          toast({ message: '注册成功', status: 'success' });
          router.push('/login');
        } else {
          toast({ message: res.message, status: 'error' });
        }
      });
    };
    return {
      // 变量
      register,
      registerValidate,
      // 函数
      createUser,
    };
  },
});
</script>
