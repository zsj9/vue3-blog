<template>
  <div class="flex justify-center">
    <div
      class="
        flex
        relative
        justify-center
        items-center
        m-1
        mr-2
        text-xl text-white
        border
      "
      :class="[
        square ? 'rounded' : 'rounded-full',
        { 'bg-orange-300': !src && !!name },
      ]"
      :style="{ width: width, height: height }"
    >
      <img
        class="w-full h-full object-cover"
        :class="[square ? 'rounded' : 'rounded-full']"
        v-if="src"
        :src="src"
      />
      <span v-else-if="name">{{ name[0] }}</span>
      <img
        v-else
        src="@/assets/images/default_user.png"
        class="w-full h-full object-cover"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src
export default defineComponent({
  props: {
    src: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    square: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '35px',
    },
    height: {
      type: String,
      default: '35px',
    },
  },
});
</script>