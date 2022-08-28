<template>
  <div class="flex flex-col min-h-screen">
    <!-- 头部 -->
    <HomeHeader
      :userinfo="userinfo"
      @setUserinfo="setUserinfo"
      @setAvatar="setAvatar"
    />
    <!-- 内容 -->
    <main class="container mx-auto flex space-x-4 py-5 flex-1">
      <router-view class="flex-1" />
      <!-- 右侧个人信息、分类信息、标签信息 -->
      <div class="px-5 space-y-6 md:hidden w-72">
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
          <div class="flex space-x-4 flex-wrap">
            <Tags v-for="tag in taglist" :key="tag.name" :name="tag.name" />
          </div>
        </div>
      </div>
    </main>
    <!-- 尾部 -->
    <HomeFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'; // @ is an alias to /src
import HomeHeader from './header.vue';
import HomeFooter from './footer.vue';
//
import Avatar from '@/components/common/avatar.vue';
import Tags from '@/components/common/tags.vue';
// api
import { getCurrentUserinfo } from '@/apis/userinfo';
import { getTaglist } from '@/apis/tag';
export default defineComponent({
  components: { HomeHeader, HomeFooter, Avatar, Tags },
  async setup() {
    const state = reactive({
      showRouter: true,
    });

    // 用户信息
    const { data: userinfoData } = await getCurrentUserinfo();
    let userinfo = reactive(userinfoData || {});
    // 标签信息
    const { data: tags } = await getTaglist({ pageSize: 20, currentPage: 1 });
    let taglist: any = reactive(tags || []);

    // 更新值
    const setUserinfo = (newUserinfo: any) => {
      Object.assign(userinfo, newUserinfo);
    };

    // 更新头像
    const setAvatar = (url: string) => {
      userinfo.avatar = url;
    };
    return {
      // 变量
      state,
      userinfo,
      taglist,
      // 函数
      setUserinfo,
      setAvatar,
    };
  },
});
</script>
