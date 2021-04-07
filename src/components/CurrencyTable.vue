<template>
<div>{{list}}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CurrencyTable',
  props: {
    currencies: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    return {
      list: props.currencies,
    };
  },
});
</script>
