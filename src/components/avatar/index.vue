<template>
  <div class="flex justify-center">
    <div
      class="
        flex
        relative
        w-10
        h-10
        justify-center
        items-center
        m-1
        mr-2
        text-xl text-white
      "
      :class="[square ? 'rounded' : 'rounded-full', { 'bg-orange-500': !src }]"
    >
      <img v-if="src" :src="src" />
      <span v-else-if="name">{{ name[0] }}</span>
      <img v-else src="@/assets/images/default_user.png" />
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
  },
});
</script>