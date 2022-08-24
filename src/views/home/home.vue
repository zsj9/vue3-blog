<template>
  <div id="Home" class="flex space-x-4 py-5">
    <!-- 左侧文章 -->
    <div class="flex-1">
      <!-- 新增按钮 -->
      <ql-button type="primary" class="flex justify-end" @click="addpost">
        新增
      </ql-button>
      <!-- card -->
      <div class="rounded-md px-4 py-4 border">
        <!-- card上 -->
        <div class="">
          <h1>文章1</h1>
        </div>
        <!-- card下 -->
        <div class="flex justify-between">
          <span class="text-gray-400">111111111111111111</span>
          <div class="flex">
            <div class="px-1 cursor-pointer flex items-center">
              <i class="icon iconfont icon-read"></i>
              <label class="text-xs text-gray-400">1111</label>
            </div>
            <div class="px-1 cursor-pointer flex items-center">
              <i class="icon iconfont icon-noLike"></i>
              <label class="text-xs text-gray-400">222</label>
            </div>
            <div class="px-1 cursor-pointer flex items-center">
              <i class="icon iconfont icon-comment"></i>
              <label class="text-xs text-gray-400">333</label>
            </div>
          </div>
        </div>
      </div>
      <!-- 分页 -->
    </div>
    <!-- 右侧个人信息、分类信息、标签信息 -->
    <div class="px-5 space-y-6 md:hidden">
      <!-- 个人信息 -->
      <div class="flex flex-col items-center border px-20 py-2">
        <Avatar :name="userinfo.name" :src="userinfo.avatar" />
        <p>{{ userinfo.name }}</p>
        <p>文章：999</p>
      </div>
      <!-- 热门文章 -->
      <div class="flex flex-col border px-2 py-2">
        <h1>热门文章</h1>
        <div class="space-y-1">
          <p>文章1</p>
          <p>文章2</p>
        </div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Avatar from '@/components/common/avatar.vue';
import qlButton from '@/components/common/ql-button.vue';
// api
import { getCurrentUserinfo } from '@/apis/userinfo';

export default defineComponent({
  name: 'Home',
  components: {
    Avatar,
    qlButton,
  },
  async setup() {
    // 用户信息
    const { data: userinfoData } = await getCurrentUserinfo();
    let userinfo = reactive(userinfoData || {});

    const addpost = () => {
      console.log('aaaa');
    };
    return {
      // 变量
      userinfo,
      // 函数
      addpost,
    };
  },
});
</script>
