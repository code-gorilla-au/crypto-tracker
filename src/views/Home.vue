<template>
  <div class="home-main">
    <h1 class="home-title">Crypto Tracker</h1>
    <CurrencyTable :currencies="list"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CurrencyTable from '@/components/CurrencyTable.vue';

export default defineComponent({
  name: 'Home',
  components: {
    CurrencyTable,
  },
  setup() {
    return {
      list: [
        { hello: 'world' },
      ],
    };
  },
});
</script>
<style scoped>
.home-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.home-title {
  font-size: var(--font-lg);
  font-weight: var(--font-bolder);
}
</style>
