<template>
  <base-table :headers="headers" :data="list">
    <template v-slot:props="props">
      <TableColumn :label="headers[0]">
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
            v-if="isInPortfolio(props.row, portfolio)"
            @click="removeFromPortfolio(props.row)"
            pack="fas"
            icon="fa-star"
          />
          <base-icon
            class="cursor-pointer text-yellow-500"
            v-else
            @click="addToPortfolio(props.row)"
            pack="far"
            icon="fa-star"
          />
          <span>{{ props.row.market_cap_rank }}</span>
        </div>
      </TableColumn>
      <TableColumn :label="headers[1]">
        <div class="flex justify-start items-center">
          <img class="currency-image" :src="props.row.image" :alt="props.row.name" />
          <span>{{ props.row.name }}</span>
        </div>
      </TableColumn>
      <TableColumn :label="headers[2]">
        <span>{{ formatCurrency(props.row.current_price) }}</span>
      </TableColumn>

      <TableColumn :label="headers[3]">
        <span>{{ formatCurrency(props.row.market_cap) }}</span>
      </TableColumn>
      <TableColumn :label="headers[4]">
        <span>{{ formatCurrency(props.row.total_volume) }}</span>
      </TableColumn>
      <TableColumn :label="headers[5]">
        <span>{{ formatPercent(props.row.price_change_percentage_24h) }}</span>
      </TableColumn>
    </template>
  </base-table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TableColumn from '@/components/BaseTableColumn.vue';
import { Currency } from '@/lib/coinGeko';
import { formatCurrency, formatPercent } from '@/lib/format';

export default defineComponent({
  name: 'CurrencyTable',
  components: { TableColumn },
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
    const headers = ['Rank', 'Name', 'Price', 'Market Cap', 'Volume', '%'];
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
