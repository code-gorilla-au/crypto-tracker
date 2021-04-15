<template>
  <div class="flex w-full md:w-auto">
    <table class="min-w-full bg-white">
      <TableHead>
        <TableHeader v-for="header in headers" :key="header">
          <span>{{ header }}</span>
        </TableHeader>
      </TableHead>

      <tbody class="text-gray-700">
        <tr :class="[tableRowMobileStyles, tableRowMdStyles]" v-for="row in data" :key="row">
          <slot name="props" :row="row"></slot>
        </tr>
      </tbody>
    </table>
  </div>
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
    const tableRowMobileStyles = 'border-solid border-2 flex  flex-col';
    const tableRowMdStyles = 'md:border-none border-accent md:table-row';
    return {
      tableRowMobileStyles,
      tableRowMdStyles,
    };
  },
});
</script>
