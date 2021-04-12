<template>
  <div class="flex w-full md:w-auto">
    <table class="min-w-full bg-white">
      <TableHead>
        <TableHeader>
          <span>{{ headers[0] }}</span>
        </TableHeader>
        <TableHeader>
          <span>{{ headers[1] }}</span>
        </TableHeader>
        <TableHeader>
          <span>{{ headers[2] }}</span>
        </TableHeader>
        <TableHeader>
          <span>{{ headers[3] }}</span>
        </TableHeader>
        <TableHeader>
          <span>{{ headers[4] }}</span>
        </TableHeader>
        <TableHeader>
          <span>{{ headers[5] }}</span>
        </TableHeader>
      </TableHead>

      <tbody class="text-gray-700">
        <tr class="flex  flex-col md:table-row" v-for="currency in list" :key="currency.id">
          <TableData>
            <span>{{ headers[0] }}</span>
            <div
              class="flex
              justify-start
              items-center
              flex-row-reverse
              md:justify-between
              md:flex-row"
            >
              <base-icon
                class="cursor-pointer text-yellow-500"
                v-if="isInPortfolio(currency, portfolio)"
                @click="removeFromPortfolio(currency)"
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
          </TableData>
          <TableData class="flex justify-between items-center">
            <span class="md:hidden">{{ headers[1] }}</span>
            <div class="flex justify-start items-center">
              <img class="currency-image" :src="currency.image" :alt="currency.name" />
              <span>{{ currency.name }}</span>
            </div>
          </TableData>
          <TableData>
            <span>{{ formatCurrency(currency.current_price) }}</span>
          </TableData>

          <TableData>
            <span>{{ formatCurrency(currency.market_cap) }}</span>
          </TableData>
          <TableData>
            <span>{{ formatCurrency(currency.total_volume) }}</span>
          </TableData>
          <TableData>
            <span>{{ formatPercent(currency.price_change_percentage_24h) }}</span>
          </TableData>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TableHead from '@/components/TableHead.vue';
import TableHeader from '@/components/TableHeader.vue';
import TableData from '@/components/TableData.vue';
import { Currency } from '@/lib/coinGeko';
import { formatCurrency, formatPercent } from '@/lib/format';

export default defineComponent({
  name: 'CurrencyTable',
  components: {
    TableHead,
    TableHeader,
    TableData,
  },
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
    const headers = ['#', 'Name', 'Price', 'Market Cap', 'Volume', '%'];
    function addToPortfolio(currency: Currency): void {
      ctx.emit('add-to-portfolio', currency);
    }
    function removeFromPortfolio(currency: Currency): void {
      ctx.emit('remove-from-portfolio', currency);
    }

    function isInPortfolio(currency: Currency, portfolio: Currency[]): boolean {
      const list = portfolio.filter((item) => item.id === currency.id);
      return list.length > 0;
    }

    return {
      headers,
      list: props.currencies,
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
