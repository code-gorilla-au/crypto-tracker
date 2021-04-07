<template>
  <div class="flex">
    <div class="flex ">
      <ul class="">
        <li v-for="header in headers" :key="header">{{ header }}</li>
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
      'sumbol',
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
