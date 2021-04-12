<template>
  <th class="py-3 px-4 font-semibold text-sm">
    <slot></slot>
  </th>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableHeader',
});
</script>
