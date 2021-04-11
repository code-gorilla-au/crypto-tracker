<template>
  <div class="flex justify-center items-center flex-col">
    <h1 class="home-title">Crypto Tracker</h1>
    <Nav />
    <CurrencyTable
      :currencies="list"
      :portfolio="portfolio"
      @add-to-portfolio="addToPortfolio"
      @remove-from-portfolio="removeFromPortfolio"
    />
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Currency } from '@/lib/coinGeko';
import { ADD_TO_PORTFOLIO, REMOVE_TO_PORTFOLIO } from '@/store/constants';
import CurrencyTable from '@/components/CurrencyTable.vue';
import Nav from '@/components/Nav.vue';
import getCurrencies from '@/api/coinGeko';

export default defineComponent({
  name: 'Home',
  components: {
    CurrencyTable,
    Nav,
  },
  async setup() {
    const store = useStore();
    const portfolio: ComputedRef<Currency[]> = computed(() => store.state.portfolio);

    const { data } = await getCurrencies();

    async function addToPortfolio(currency: Currency): Promise<void> {
      await store.dispatch(ADD_TO_PORTFOLIO, currency);
    }
    async function removeFromPortfolio(currency: Currency): Promise<void> {
      await store.dispatch(REMOVE_TO_PORTFOLIO, currency);
    }

    return {
      list: data,
      portfolio,
      addToPortfolio,
      removeFromPortfolio,
    };
  },
});
</script>
<style scoped>
.home-title {
  font-size: var(--font-lg);
  font-weight: var(--font-bolder);
}
</style>
