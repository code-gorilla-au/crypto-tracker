<template>
  <nav class="my-2 flex justify-evenly items-center text-white font-semibold">
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
