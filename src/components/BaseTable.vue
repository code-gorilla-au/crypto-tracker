<template>
  <table class="w-full md:w-auto table-auto bg-white">
    <TableHead>
      <TableHeader v-for="header in headers" :key="header">
        <span>{{ header }}</span>
      </TableHeader>
    </TableHead>

    <tbody class="text-gray-700">
      <tr class="px-24" v-if="data.length === 0">
        <slot name="empty-slate"></slot>
      </tr>
      <tr v-else :class="[tableRowMobileStyles, tableRowMdStyles]" v-for="row in data" :key="row">
        <slot name="props" :row="row"></slot>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import TableHead from '@/components/TableHead.vue';
import TableHeader from '@/components/TableHeader.vue';

export default defineComponent({
  name: 'BaseTable',
  components: {
    TableHead,
    TableHeader,
  },
  props: {
    headers: {
      type: Array as PropType<string[]>,
      required: true,
    },
    data: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  setup() {
    const tableRowMobileStyles = 'border-solid border-2 border-accent flex flex-col';
    const tableRowMdStyles = 'md:border-none md:table-row';
    return {
      tableRowMobileStyles,
      tableRowMdStyles,
    };
  },
});
</script>
