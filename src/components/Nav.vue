<template>
  <nav class="flex w-1/3 justify-evenly items-center">
    <router-link to="/">home</router-link> |
    <router-link to="/portfolio">portfolio</router-link>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Nav',
});
</script>
