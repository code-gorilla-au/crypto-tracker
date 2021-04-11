<template>
  <div class="flex justify-center items-center flex-col">
    <h1 class="portfolio-home-title">Portfolio</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
  },
});
</script>
<style scoped>
.portfolio-home-title {
  font-size: var(--font-lg);
  font-weight: var(--font-bolder);
}
</style>
