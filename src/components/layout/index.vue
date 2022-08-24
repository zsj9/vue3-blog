<template>
  <div class="flex flex-col min-h-screen">
    <!-- 头部 -->
    <suspense>
      <HomeHeader />
    </suspense>
    <!-- 内容 -->
    <main class="container mx-auto flex-1">
      <router-view v-if="state.showRouter" />
    </main>
    <!-- 尾部 -->
    <HomeFooter />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, nextTick, provide } from 'vue'; // @ is an alias to /src
import HomeHeader from './header.vue';
import HomeFooter from './footer.vue';
export default defineComponent({
  components: { HomeHeader, HomeFooter },
  setup() {
    const state = reactive({
      showRouter: true,
    });
    function reload() {
      console.log('aaaa');
      state.showRouter = false;
      nextTick(() => {
        state.showRouter = true;
      });
    }
    provide('reload', reload);
    return {
      state,
    };
  },
});
</script>
