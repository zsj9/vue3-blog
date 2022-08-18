<template>
  <Modal title="用户设置" :isOpen="isOpen" @close="onClose">
    <div class="flex flex-col items-center space-y-4">
      <Avatar width="100px" height="100px" square />
      <label class="cursor-pointer">
        <span
          class="
            mt-2
            text-base
            leading-normal
            px-4
            py-2
            bg-blue-500
            text-white
            rounded-full
          "
        >
          上传头像
        </span>
        <input
          ref="uploadForm"
          class="hidden"
          type="file"
          accept="image/*"
          @change="upload"
        />
      </label>
      <div class="flex flex-col space-y-2 w-full">
        <FormControl labelName="名称">
          <input
            type="text"
            v-model="userinfoParam.name"
            placeholder="请输入名称"
          />
        </FormControl>
        <FormControl labelName="出生日期">
          <input type="date" v-model="userinfoParam.birthAt" />
        </FormControl>
        <FormControl labelName="性别">
          <select class="form-select" v-model="userinfoParam.sex">
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </FormControl>
        <FormControl labelName="个性签名">
          <textarea v-model="userinfoParam.remark" />
        </FormControl>
      </div>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue'; // @ is an alias to /src
import Modal from '@/components/common/modal.vue';
import Avatar from '@/components/common/avatar.vue';
import FormControl from '@/components/common/formControl.vue';
// api
import { userinfoUpload } from '@/apis/userinfo';
// hooks
import toast from '@/hooks/useToast';

export default defineComponent({
  components: { Modal, Avatar, FormControl },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    userinfo: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props: any, { emit }) {
    let uploadForm = ref();
    console.log('props.userinfo', props.userinfo._id);
    let userinfoParam = reactive({
      name: '',
      birthAt: '',
      sex: '',
      remark: '',
    });

    const onClose = () => {
      emit('onClose');
    };

    const upload = (file: any) => {
      const files = file.target.files[0];
      const isLt50M = files.size / 1024 / 1024 < 50;
      if (!isLt50M) {
        toast({ message: '上传文件大小不能超过 50MB!', status: 'error' });
        return;
      }
      const form = new FormData();
      form.append('img', files);
      form.append('userinfoId', props.userinfo._id);
      uploadForm.value.value = '';
      userinfoUpload(form).then(res => {
        if (res.code === 200) {
          console.log('res', res);
        } else {
          toast({ message: res.message, status: 'error' });
        }
      });
    };
    return {
      uploadForm,
      userinfoParam,
      // 函数
      onClose,
      upload,
    };
  },
});
</script>