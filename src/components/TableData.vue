<template>
  <td class="flex justify-between items-center py-3 px-4">
    <slot></slot>
  </td>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableData',
  props: {
    label: {
      type: String,
      required: false,
      default: '',
    },
  },
});
</script>
