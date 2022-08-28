<template>
  <header class="bg-white border-b w-full dark:bg-gray-800">
    <!-- 大屏 -->
    <div class="header flex md:hidden">
      <!-- logo -->
      <div class="text-3xl font-bold font-heading">柒杰</div>
      <!--  -->
      <div class="flex flex-row items-center justify-between flex-1">
        <!-- 导航条 -->
        <div class="flex flex-row items-center space-x-6">
          <router-link
            to="/blog"
            :class="[{ 'text-blue-600': currentRoute == '/blog' }]"
          >
            首页
          </router-link>
          <router-link
            to="/tag"
            :class="[{ 'text-blue-600': currentRoute == '/tag' }]"
          >
            标签
          </router-link>
          <router-link
            to="/type"
            :class="[{ 'text-blue-600': currentRoute == '/type' }]"
          >
            分类
          </router-link>
          <router-link
            to="/files"
            :class="[{ 'text-blue-600': currentRoute == '/files' }]"
          >
            归档
          </router-link>
        </div>
        <!-- 模式、搜索 -->
        <div class="flex">
          <!-- 白天模式 -->
          <button
            v-if="isDarkMode"
            type="button"
            class="icon iconfont icon-morning dark-btn"
            @click="changeDark"
          ></button>
          <!-- 夜间模式 -->
          <button
            v-else
            type="button"
            class="icon iconfont icon-night dark-btn"
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
        <Menu as="div" class="relative">
          <MenuButton>
            <Avatar :name="userinfo.name" :src="userinfo.avatar" />
          </MenuButton>

          <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <MenuItems
              class="
                absolute
                right-0
                mt-2
                w-56
                bg-white
                ring-1 ring-black ring-opacity-5
                z-50
              "
            >
              <div class="px-1 py-1">
                <MenuItem v-slot="{ active }" v-if="!userinfo._id">
                  <router-link
                    class="menu-list"
                    :class="active ? 'bg-blue-500 text-white' : 'text-gray-900'"
                    to="/login"
                  >
                    登录
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }" v-if="!userinfo._id">
                  <router-link
                    class="menu-list"
                    :class="active ? 'bg-blue-500 text-white' : 'text-gray-900'"
                    to="/register"
                  >
                    注册
                  </router-link>
                </MenuItem>
                <MenuItem v-slot="{ active }" v-if="userinfo._id">
                  <button
                    class="menu-list"
                    :class="active ? 'bg-blue-500 text-white' : 'text-gray-900'"
                    @click="userModal.isOpen = true"
                  >
                    用户设置
                  </button>
                </MenuItem>
                <MenuItem v-slot="{ active }" v-if="userinfo._id">
                  <button
                    class="menu-list"
                    :class="active ? 'bg-blue-500 text-white' : 'text-gray-900'"
                    @click="signOut"
                  >
                    退出
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
    <!-- 小屏 -->
    <div class="header hidden md:flex relative">
      <!-- logo -->
      <div class="text-3xl font-bold font-heading">柒杰</div>
      <!--  -->
      <div class="hidden md:flex">
        <button @click="usedrawer.isOpen = true">Menu</button>

        <!-- 小屏菜单 -->
        <Drawer v-model:isOpen="usedrawer.isOpen">
          <img
            src="http://p2.qhimg.com/bdr/__85/t013ea59b13b437320b.jpg"
            alt="侧边栏壁纸"
            class="absolute top-0 left-0 -z-1 h-28 w-full object-cover"
          />
          <div class="absolute top-24 left-0 wh-full px-2 space-y-2">
            <!-- 头像部分 -->
            <div class="slideout">
              <Avatar square :name="userinfo.name" :src="userinfo.avatar" />
              <div class="ml-2">
                <p>{{ userinfo.name }}</p>
                <p class="text-sm text-gray-400">
                  {{ userinfo.remark || '这个人很懒，什么都没留下' }}
                </p>
              </div>
            </div>
            <!-- 文章记录 -->
            <div class="slideout flex-col text-sm text-gray-400">
              <p>累计撰写 <strong class="text-blue-500">246</strong> 篇文章</p>
              <p>累计发起 <strong class="text-blue-500">670</strong> 条评论</p>
            </div>
            <!-- 导航条 -->
            <div class="flex flex-col border px-2 py-2 space-y-3">
              <button class="text-left">首页</button>
              <button class="text-left">标签</button>
              <button class="text-left">分类</button>
              <button class="text-left">归档</button>
            </div>
            <!-- 热门文章 -->
            <div class="flex flex-col border px-2 py-2">
              <h1>热门文章</h1>
              <div class="space-y-1">
                <p>文章1</p>
                <p>文章2</p>
              </div>
            </div>
            <!-- 当前时间 -->
            <div class="flex flex-col border px-2 py-2">
              <h1>当前时间</h1>
            </div>
            <!-- 分类 -->
            <div class="flex flex-col border px-2 py-2">
              <h1>分类</h1>
              <div class="flex justify-between border">
                <span>分类1</span>
                <span class="bg-red-400 px-2 text-white">66</span>
              </div>
            </div>
            <!-- 标签 -->
            <div class="flex flex-col border px-2 py-2">
              <h1>标签</h1>
              <div class="grid grid-cols-4 gap-4">
                <p class="bg-red-400 text-white">标签1</p>
                <p class="bg-red-400 text-white">标签2</p>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
    <!-- modal -->
    <UserSetingModal
      :isOpen="userModal.isOpen"
      @onClose="userModal.isOpen = false"
      @setUserinfo="setUserinfo"
      @setAvatar="setAvatar"
      :userinfo="userinfo"
    />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue'; // @ is an alias to /src
import { useRouter } from 'vue-router';
import Drawer from '@/components/common/drawer.vue';
import Avatar from '@/components/common/avatar.vue';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import UserSetingModal from './modal/userSeting.vue';

export default defineComponent({
  components: {
    Drawer,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    UserSetingModal,
    Avatar,
  },
  props: {
    userinfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props: any, { emit }) {
    const router = useRouter();

    // 是否深色模式
    let isDarkMode: { value: boolean } = ref(false);
    // 是否显示侧边栏
    let usedrawer = reactive({ isOpen: false, direction: 3000 });
    // 是否弹窗
    let userModal = reactive({ isOpen: false, direction: 3000 });
    // 是否当前路由
    let currentRoute: { value: string } = ref(router.currentRoute.value.path);

    watch(
      () => router.currentRoute.value.path,
      newValue => {
        currentRoute.value = newValue ? newValue.toString() : '';
      },
      { immediate: true },
    );

    // 切换暗间/白天模式
    const changeDark = () => {
      if (document.documentElement.classList.value !== 'dark') {
        isDarkMode.value = true;
        document.documentElement.classList.add('dark');
      } else {
        isDarkMode.value = false;
        document.documentElement.classList.remove('dark');
      }
    };

    // 退出登录
    const signOut = () => {
      localStorage.removeItem('password');
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('userid');
      router.push('/login');
    };

    const setUserinfo = (value: any) => {
      emit('setUserinfo', value);
    };

    const setAvatar = (value: string) => {
      emit('setUserinfo', value);
    };
    return {
      // 变量
      isDarkMode,
      usedrawer,
      userModal,
      currentRoute,
      // 函数
      changeDark,
      signOut,
      setUserinfo,
      setAvatar,
    };
  },
});
</script>


<style scoped>
.header {
  @apply container py-2 mx-auto items-center justify-between space-x-10 px-5;
}
.con-center {
  @apply container flex justify-between items-center mx-auto;
}
.dark-btn {
  @apply px-2 mx-2 hover:bg-gray-100 hover:text-gray-600;
}
.wh-full {
  @apply w-full h-full;
}
.slideout {
  @apply flex border p-4 bg-white rounded;
}
.menu-list {
  @apply group flex w-full items-center rounded-md px-2 py-2 text-sm;
}
</style>