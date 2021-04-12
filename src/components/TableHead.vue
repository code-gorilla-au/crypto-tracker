<template>
  <thead>
    <tr class="hidden md:table-row bg-gray-800 text-white">
      <slot></slot>
    </tr>
  </thead>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableHead',
});
</script>
