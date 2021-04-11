<template>
  <div class="flex justify-center items-center flex-col">
    <h1 class="home-title">Crypto Tracker</h1>
    <Nav />
    <CurrencyTable
      :currencies="list"
      :portfolio="portfolio"
      @add-to-portfolier="addToPortfolio"
      @remove-from-portfolio="removeFromPortfolio"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    const { data } = await getCurrencies();

    function addToPortfolio(currency: Currency): void {
      store.dispatch(ADD_TO_PORTFOLIO, currency);
    }
    function removeFromPortfolio(currency: Currency): void {
      store.dispatch(REMOVE_TO_PORTFOLIO, currency);
    }

    return {
      list: data,
      portfolio: store.state.portfolio,
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
