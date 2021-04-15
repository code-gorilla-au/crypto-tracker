<template>
  <div class="flex justify-center items-center flex-col">
    <div class="flex my-6 w-full flex-col justify-center items-center">
      <h1 class="text-3xl font-black">Crypto Tracker</h1>
      <Nav class="w-1/2 md:w-1/3" />
    </div>
    <PorfolioTable :portfolio="portfolio" @remove-from-portfolio="removeFromPortfolio" />
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { REMOVE_TO_PORTFOLIO } from '@/store/constants';
import { Currency } from '@/lib/coinGeko';
import PorfolioTable from '@/components/PortfolioTable.vue';
import Nav from '@/components/Nav.vue';

export default defineComponent({
  name: 'Portfolio',
  components: {
    PorfolioTable,
    Nav,
  },
  setup() {
    const store = useStore();

    async function removeFromPortfolio(currency: Currency) {
      await store.dispatch(REMOVE_TO_PORTFOLIO, currency);
    }
    return {
      portfolio: computed(() => store.state.portfolio),
      removeFromPortfolio,
    };
  },
});
</script>
<style scoped></style>
