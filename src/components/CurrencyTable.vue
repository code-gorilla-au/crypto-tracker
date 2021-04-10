<template>
  <div class="flex">
    <table class="min-w-full table-auto">
      <thead class="justify-between">
        <tr class="primary">
          <th>
            <span>hello</span>
          </th>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
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
    const headers = [
      'id',
      'symbol',
      'name',
      'image',
      'current price',
      'market cap',
      'market rank',
      'total volume',
      'change %',
    ];
    return {
      list: props.currencies,
      headers,
    };
  },
});
</script>
