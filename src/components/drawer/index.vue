<template>
  <div>
    <transition
      enter-class="opacity-0"
      enter-active-class="ease-out transition-medium"
      enter-to-class="opacity-100"
      leave-class="opacity-100"
      leave-active-class="ease-out transition-medium"
      leave-to-class="opacity-0"
    >
      <div
        @keydown.esc="close()"
        v-show="isOpen"
        class="z-10 fixed inset-0 transition-opacity"
      >
        <div
          class="absolute inset-0 bg-black opacity-50"
          tabindex="0"
          @click="close"
        ></div>
      </div>
    </transition>
    <aside
      class="
        transform
        top-0
        left-0
        w-2/3
        bg-white
        fixed
        h-full
        ease-in-out
        transition-all
        duration-300
        z-30
      "
      :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <slot />
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'; // @ is an alias to /src
export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit('update:isOpen', false);
    };
    onMounted(() => {
      document.addEventListener('keydown', e => {
        if (e.keyCode === 27) close();
      });
    });
    return { close };
  },
});
</script>