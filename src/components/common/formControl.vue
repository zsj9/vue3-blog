<template>
  <div class="flex flex-col">
    <label>
      {{ labelName }}：
      <span v-if="isRequired" class="text-red-500">*</span>
    </label>
    <slot />
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src
export default defineComponent({
  props: {
    labelName: {
      type: String,
      default: '',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
});
</script>