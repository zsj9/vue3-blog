<template>
  <!-- 左侧文章 -->
  <div id="Home">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import qlButton from '@/components/common/ql-button.vue';

export default defineComponent({
  name: 'Home',
  components: { qlButton },
  async setup() {
    const addpost = () => {
      console.log('aaaa');
    };
    return {
      // 函数
      addpost,
    };
  },
});
</script>
