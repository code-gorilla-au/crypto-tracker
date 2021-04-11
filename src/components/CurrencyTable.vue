<template>
  <div class="flex">
    <table class="min-w-full bg-white">
      <thead class="">
        <tr class="bg-gray-800 text-white">
          <th :class="headerStyle">
            <span>#</span>
          </th>
          <th :class="[headerStyle, 'w-1/7 text-left']">
            <span>Name</span>
          </th>
          <th :class="[headerStyle, 'w-1/3 text-right']">
            <span>Current Price</span>
          </th>
          <th :class="[headerStyle, 'w-1/3 text-right']">
            <span>Market Cap</span>
          </th>
          <th :class="[headerStyle, 'w-1/3 text-right']">
            <span>Total Volume</span>
          </th>
          <th :class="[headerStyle, 'w-1/3 text-right']">
            <span>%</span>
          </th>
        </tr>
      </thead>
      <tbody class="text-gray-700">
        <tr v-for="currency in list" :key="currency.id">
          <td class="text-left py-3 px-4">
            <div class="flex justify-between items-center">
              <base-icon
                class="cursor-pointer text-yellow-500"
                v-if="isInPortfolio(currency)"
                @click.="removeFromPortfolio(currency)"
                pack="fas"
                icon="fa-star"
              />
              <base-icon
                class="cursor-pointer text-yellow-500"
                v-else
                @click="addToPortfolio(currency)"
                pack="far"
                icon="fa-star"
              />
              <span>{{ currency.market_cap_rank }}</span>
            </div>
          </td>
          <td :class="['flex justify-start items-center py-3 px-4', 'w-1/7']">
            <img class="currency-image" :src="currency.image" :alt="currency.name" />
            <span>{{ currency.name }}</span>
          </td>
          <td class="text-right py-3 px-4">
            <span>{{ formatCurrency(currency.current_price) }}</span>
          </td>

          <td class="text-right py-3 px-4">
            <span>{{ formatCurrency(currency.market_cap) }}</span>
          </td>
          <td class="text-right py-3 px-4">
            <span>{{ formatCurrency(currency.total_volume) }}</span>
          </td>
          <td class="text-right py-3 px-4">
            <span>{{ formatPercent(currency.price_change_percentage_24h) }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, watchEffect } from 'vue';
import { Currency } from '@/lib/coinGeko';
import { formatCurrency, formatPercent } from '@/lib/format';

export default defineComponent({
  name: 'CurrencyTable',
  props: {
    currencies: {
      type: Object as PropType<Currency[]>,
      required: true,
    },
    portfolio: {
      type: Object as PropType<Currency[]>,
      required: true,
    },
  },
  setup(props, ctx) {
    const headerStyle = computed(() => 'py-3 px-4 font-semibold text-sm');

    function addToPortfolio(currency: Currency): void {
      ctx.emit('add-to-portfolier', currency);
    }
    function removeFromPortfolio(currency: Currency): void {
      ctx.emit('remove-from-portfolio', currency);
    }

    function isInPortfolio(currency: Currency): boolean {
      const index = props.portfolio.findIndex(
        (item) => item.id === currency.id && item.name === currency.name,
      );
      return index > 0;
    }

    return {
      list: props.currencies,
      headerStyle,
      addToPortfolio,
      removeFromPortfolio,
      formatCurrency,
      formatPercent,
      isInPortfolio,
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
