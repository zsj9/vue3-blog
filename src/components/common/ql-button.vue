<template>
  <div>
    <button
      class="border bg-white py-1 px-4 hover:opacity-75"
      :class="[
        { 'bg-blue-500': type == 'primary' },
        { 'bg-green-500': type == 'success' },
        { 'bg-gray-500': type == 'info' },
        { 'bg-yellow-500': type == 'warning' },
        { 'bg-red-500': type == 'danger' },
        { 'text-white': !!type },
      ]"
    >
      <slot />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src
export default defineComponent({
  props: {
    type: {
      type: String,
      default: '',
    },
  },
});
</script>