<template>
  <div class="fixed top-5 w-screen flex justify-center">
    <div
      class="flex items-center text-white max-w-sm w-full rounded-lg toast"
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
    bgcolor: {
      type: String,
      default: '',
    },
    isShow: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style scoped>
.toast {
  animation: anim 0.5s;
}
@keyframes anim {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.toast.reomve {
  animation: reomve 0.5s;
}
@keyframes reomve {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>