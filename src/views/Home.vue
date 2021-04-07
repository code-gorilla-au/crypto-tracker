<template>
  <main class="home-main">
    <h1>Crypto Tracker</h1>
    <CurrencyTable :currencies="list"/>
  </main>
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
}
</style>
