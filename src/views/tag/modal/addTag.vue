<template>
  <div v-if="isOpen">
    <Modal
      title="用户设置"
      :isOpen="isOpen"
      @close="onClose"
      @confirm="onConfirm"
    >
      <div class="flex flex-col items-center space-y-4">
        <FormControl labelName="名称">
          <input type="text" v-model="tagParam.name" placeholder="请输入名称" />
        </FormControl>
      </div>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'; // @ is an alias to /src
import Modal from '@/components/common/modal.vue';
import FormControl from '@/components/common/formControl.vue';
// hooks
import toast from '@/hooks/useToast';
// api
import { addTag } from '@/apis/tag';

export default defineComponent({
  components: { Modal, FormControl },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: any, { emit }) {
    let tagParam = reactive({ name: '' });
    // 关闭
    const onClose = () => {
      emit('onClose');
    };

    // 监听页面关闭
    watch(
      () => props.isOpen,
      newValue => {
        if (newValue) {
          Object.assign(tagParam, { name: '' });
        }
      },
    );

    // 确认
    const onConfirm = () => {
      addTag(tagParam).then(res => {
        if (res.code === 200) {
          onClose();
          emit('createTag', res.data);
        } else {
          toast({ message: res.message, status: 'error' });
        }
      });
    };
    return {
      tagParam,
      // 函数
      onClose,
      onConfirm,
    };
  },
});
</script>