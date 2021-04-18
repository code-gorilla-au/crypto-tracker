<template>
  <div class="flex justify-center items-center flex-col">
    <div class="flex my-6 w-full flex-col justify-center items-center">
      <h1 class="text-3xl font-black">Crypto Tracker</h1>
      <Nav class="w-1/2 md:w-1/3" />
    </div>
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
import { ADD_TO_PORTFOLIO, REMOVE_FROM_PORTFOLIO } from '@/store/constants';
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
      await store.dispatch(REMOVE_FROM_PORTFOLIO, currency);
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
<style scoped></style>
