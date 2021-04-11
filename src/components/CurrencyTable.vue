<template>
  <div class="flex">
    <table class="min-w-full bg-white">
      <thead class="justify-between">
        <tr class="bg-gray-800 text-white">
          <th :key="header" :class="headerStyle">
            <span>#</span>
          </th>
          <th :key="header" :class="headerStyle">
            <span>Name</span>
          </th>
          <th :key="header" :class="headerStyle">
            <span>Current Price</span>
          </th>
          <th :key="header" :class="headerStyle">
            <span>Market Cap</span>
          </th>
          <th :key="header" :class="headerStyle">
            <span>Total Volume</span>
          </th>
          <th :key="header" :class="headerStyle">
            <span>Change %</span>
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr v-for="currency in list" :key="currency.id">
          <td class="text-left py-3 px-4">
            <span>{{ currency.market_cap_rank }}</span>
          </td>
          <td :class="rowStyle">
            <img class="currency-image" :src="currency.image" :alt="currency.name" />
            <span>{{ currency.name }}</span>
          </td>
          <td class="text-right py-3 px-4">
            <span>{{ currency.current_price }}</span>
          </td>

          <td class="text-right py-3 px-4">
            <span>{{ currency.market_cap }}</span>
          </td>
          <td class="text-right py-3 px-4">
            <span>{{ currency.total_volume }}</span>
          </td>
          <td class="text-right py-3 px-4">
            <span>{{ currency.price_change_percentage_24h }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Currency } from '@/lib/coinGeko';

export default defineComponent({
  name: 'CurrencyTable',
  props: {
    currencies: {
      type: Object as PropType<Currency[]>,
      required: true,
    },
  },
  setup(props) {
    const headers = ['#', 'name', 'current price', 'market cap', 'total volume', 'change %'];
    const headerStyle = computed(() => 'w-1/3 text-left py-3 px-4 font-semibold text-sm');
    const rowStyle = computed(() => 'flex justify-start items-center w-1/7 py-3 px-4');
    return {
      list: props.currencies,
      headers,
      headerStyle,
      rowStyle,
    };
  },
});
</script>
<style lang="postcss" scoped>
.currency-image {
  min-width: 25px;
  max-width: 25px;
  margin-right: 0.3rem;
}
</style>
