<template>
  <transition name="toast">
    <div
      class="
        flex
        items-center
        text-white
        max-w-sm
        w-full
        rounded-lg
        absolute
        top-5
      "
      :class="bgcolor"
    >
      <div class="w-10 border-r px-2" v-if="status == 'success'">
        <i class="icon iconfont icon-success"></i>
      </div>
      <div class="w-10 border-r px-2" v-if="status == 'error'">
        <i class="icon iconfont icon-error"></i>
      </div>
      <div class="w-10 border-r px-2" v-if="status == 'warning'">
        <i class="icon iconfont icon-warning"></i>
      </div>
      <div class="w-10 border-r px-2" v-if="status == 'info'">
        <i class="icon iconfont icon-info"></i>
      </div>

      <div class="flex items-center px-2 py-3">
        <div class="mx-3">{{ message }}</div>
      </div>
    </div>
  </transition>
</template>
 
<script lang="ts">
import { reactive, defineComponent, watch, ref } from 'vue';
export default defineComponent({
  props: ['message', 'status'],
  setup(props) {
    let bgcolor = ref('');
    watch(
      () => props.status,
      newProps => {
        if (newProps === 'success') {
          bgcolor.value = 'bg-green-400';
        } else if (newProps === 'error') {
          bgcolor.value = 'bg-red-400';
        } else if (newProps === 'warning') {
          bgcolor.value = 'bg-yellow-400';
        } else if (newProps === 'info') {
          bgcolor.value = 'bg-gray-400';
        }
      },
    );
    return { bgcolor };
  },
});
export function useToastEffect(): any {
  const toastData = reactive({
    showToast: false,
    message: '',
    status: '',
  });
  const showToast = (status: string, message: string) => {
    toastData.showToast = true;
    toastData.message = message;
    toastData.status = status;
    setTimeout(() => {
      toastData.showToast = false;
    }, 1000);

    setTimeout(() => {
      toastData.message = '';
      toastData.status = '';
    }, 2000);
  };
  return { toastData, showToast };
}
</script>


<style scoped>
/*定义动画*/
.toast-enter-active,
.toast-leave-active {
  transition: opacity 1s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
}
</style>