<template>
  <i :class="[pack, icon, size]"></i>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    pack: {
      type: String,
      required: false,
      default: 'fas',
    },
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style></style>
