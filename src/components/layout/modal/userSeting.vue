<template>
  <div v-if="isOpen">
    <Modal
      title="用户设置"
      :isOpen="isOpen"
      @close="onClose"
      @confirm="onConfirm"
    >
      <div class="flex flex-col items-center space-y-4">
        <Avatar width="100px" height="100px" square :src="userinfo.avatar" />
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch } from 'vue'; // @ is an alias to /src
import Modal from '@/components/common/modal.vue';
import Avatar from '@/components/common/avatar.vue';
import FormControl from '@/components/common/formControl.vue';
// api
import { userinfoUpload, updateUserinfo } from '@/apis/userinfo';
// hooks
import toast from '@/hooks/useToast';
// utils
import { format } from '@/utils/util';

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
    console.log('进来了');
    let uploadForm = ref();
    let userinfoParam = reactive({
      _id: props.userinfo._id,
      name: props.userinfo.name,
      birthAt: format(new Date(props.userinfo.birthAt), 'yyyy-MM-dd'),
      sex: props.userinfo.sex,
      remark: props.userinfo.remark,
    });

    const onClose = () => {
      emit('onClose');
    };

    watch(
      () => props.isOpen,
      newValue => {
        if (newValue) {
          Object.assign(userinfoParam, {
            _id: props.userinfo._id,
            name: props.userinfo.name,
            birthAt: format(new Date(props.userinfo.birthAt), 'yyyy-MM-dd'),
            sex: props.userinfo.sex,
            remark: props.userinfo.remark,
          });
        }
      },
    );

    // 上传
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
          onClose();
          emit('setAvatar', res.data.avatar);
        } else {
          toast({ message: res.message, status: 'error' });
        }
      });
    };

    // 修改
    const onConfirm = () => {
      updateUserinfo(userinfoParam).then(res => {
        if (res.code === 200) {
          onClose();
          emit('setUserinfo', res.data);
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
      onConfirm,
    };
  },
});
</script>