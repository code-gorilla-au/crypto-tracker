<template>
  <div class="flex justify-center items-center flex-col">
    <h1 class="portfolio-home-title">Portfolio</h1>
    <Nav />
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
<style scoped>
.portfolio-home-title {
  font-size: var(--font-lg);
  font-weight: var(--font-bolder);
}
</style>
