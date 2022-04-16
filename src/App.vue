<template>
  <div id="app">
    <Particles />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; // @ is an alias to /src
import Particles from '@/components/particles/index.vue';
export default defineComponent({
  name: 'BackgroundParticles',
  components: {
    Particles,
  },
});
</script>
