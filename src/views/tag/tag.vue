<template>
  <div id="Tag">
    <!-- 标签 -->
    <div class="border pl-2 py-1">
      <div class="flex justify-between items-center">
        <span class="text-xl font-bold font-heading">标签</span>
        <div class="flex items-center space-x-4">
          <span>共{{ tagLength }}个</span>
          <ql-button
            type="primary"
            class="flex justify-end"
            @click="tagModal.isOpen = true"
          >
            新增
          </ql-button>
        </div>
      </div>
      <div class="flex space-x-4 flex-wrap">
        <Tags v-for="tag in taglist" :key="tag.name" :name="tag.name" />
      </div>
    </div>
    <!-- 文章 -->
    <div>
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
    </div>

    <!-- modal -->
    <AddTagModal
      :isOpen="tagModal.isOpen"
      @onClose="tagModal.isOpen = false"
      @createTag="createTag"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import qlButton from '@/components/common/ql-button.vue';
import Tags from '@/components/common/tags.vue';

import AddTagModal from './modal/addTag.vue';

// api
import { getTaglist } from '@/apis/tag';

export default defineComponent({
  name: 'Tag',
  components: { qlButton, Tags, AddTagModal },
  async setup() {
    // 是否弹窗
    let tagModal = reactive({ isOpen: false, direction: 3000 });
    // 标签信息
    const { data: tags } = await getTaglist({ pageSize: 20, currentPage: 1 });
    let taglist: any = reactive(tags || []);
    // 标签数
    let tagLength = ref(taglist.length || 0);
    // 新增
    const createTag = (e: any) => {
      taglist.push(e);
      tagLength.value += 1;
    };
    return {
      // 变量
      tagModal,
      taglist,
      // 函数
      createTag,
      tagLength,
    };
  },
});
</script>
