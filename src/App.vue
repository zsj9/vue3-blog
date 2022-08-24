<template>
  <div style="height: 100%">
    <suspense>
      <router-view />
    </suspense>
    <Particles />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src
import Particles from '@/components/particles/index.vue';
export default defineComponent({
  components: { Particles },
});
</script>
