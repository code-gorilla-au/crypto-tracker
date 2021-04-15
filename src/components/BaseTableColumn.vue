<template>
  <td :class="[columnMdStyles, columnMobileStyles]">
    <span :class="[labelMdStyles, labelMobileStyles]">{{ label }}</span>
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
  setup() {
    const labelMobileStyles = 'font-semibold';
    const labelMdStyles = 'md:hidden';
    const columnMobileStyles = '';
    const columnMdStyles = 'flex justify-between items-center md:table-cell py-3 px-4';
    return {
      columnMdStyles,
      columnMobileStyles,
      labelMobileStyles,
      labelMdStyles,
    };
  },
});
</script>
