<template>
  <div class="flex">
    <div class="hidden sm:flex">
      <ul class="flex m-1 justify-evenly">
        <li class="" v-for="header in headers" :key="header">{{ header }}</li>
      </ul>
    </div>
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
