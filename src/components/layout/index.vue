<template>
  <div class="flex flex-col min-h-screen">
    <!-- 头部 -->
    <header class="bg-white border-b w-full dark:bg-gray-800">
      <div
        class="
          container
          py-2
          mx-auto
          flex
          items-center
          justify-between
          lg:space-x-10
        "
      >
        <!-- logo -->
        <div class="text-3xl font-bold font-heading">柒杰</div>
        <!-- 大屏 -->
        <div
          class="
            hidden
            lg:flex lg:flex-row lg:items-center lg:justify-between lg:flex-1
          "
        >
          <!-- 导航条 -->
          <div class="flex lg:flex-row lg:items-center lg:space-x-6">
            <button>首页</button>
            <button>标签</button>
            <button>分类</button>
            <button>归档</button>
          </div>
          <!-- 模式、搜索 -->
          <div class="flex">
            <!-- 白天模式 -->
            <button
              v-if="isDarkMode"
              type="button"
              class="
                icon
                iconfont
                icon-morning
                px-2
                mx-2
                hover:bg-gray-100 hover:text-gray-600
              "
              @click="changeDark"
            ></button>
            <!-- 夜间模式 -->
            <button
              v-else
              type="button"
              class="
                icon
                iconfont
                icon-night
                px-2
                mx-2
                hover:bg-gray-100 hover:text-gray-600
              "
              @click="changeDark"
            ></button>
            <!-- 搜索 -->
            <form class="border border-gray-200 flex flex-wrap justify-between">
              <input
                type="text"
                class="border-none focus:outline-none focus:ring-0 pl-2 my-1"
              />
              <button
                type="button"
                class="icon iconfont icon-search px-2"
              ></button>
            </form>
          </div>
          <!-- 登录头像 -->
          <div class="group relative">
            <img
              src="@/assets/images/default_user.png"
              class="rounded-full h-10 w-10 cursor-pointer"
            />
            <div
              class="
                hidden
                group-hover:flex
                flex-col
                items-start
                w-20
                shadow-login
                absolute
                right-2
                z-10
                rounded-lg
                py-1
                bg-white
              "
            >
              <router-link class="px-2 py-1 hover:text-blue-400" to="/login">
                登录
              </router-link>
              <router-link class="px-2 py-1 hover:text-blue-400" to="/register">
                注册
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- 内容 -->
    <main class="container mx-auto flex-1">
      <router-view />
    </main>
    <!-- 尾部 -->
    <footer class="bg-gray-100">
      <div
        class="container flex justify-between items-center px-4 py-6 mx-auto"
      >
        <div class="flex items-center">
          <img class="w-8 h-8" src="@/assets/images/logo.png" />
          <span>柒杰的博客</span>
        </div>
        <p>© AMPLE BLOG WORDPRESS THEME, COPYRIGHT 2021</p>
        <div class="space-x-3">
          <button type="button" class="icon iconfont icon-weixin"></button>
          <button type="button" class="icon iconfont icon-QQ"></button>
          <button type="button" class="icon iconfont icon-github"></button>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'; // @ is an alias to /src
export default defineComponent({
  setup() {
    // 是否深色模式
    let isDarkMode: { value: boolean } = ref(false);
    // 是否登录
    // let isLogin: ({ value: boolean }) = ref(false);

    const changeDark = () => {
      if (document.documentElement.classList.value !== 'dark') {
        isDarkMode.value = true;
        document.documentElement.classList.add('dark');
      } else {
        isDarkMode.value = false;
        document.documentElement.classList.remove('dark');
      }
    };
    return {
      // 变量
      isDarkMode,
      // isLogin,
      // 函数
      changeDark,
    };
  },
});
</script>
