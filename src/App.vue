<template>
  <router-view v-slot="{ Component }">
    <template v-if="Component">
      <transition mode="out-in">
        <suspense>
          <component :is="Component"></component>
          <template #fallback>
            <div class="loader-container">
              <h1 class="flex justify-center text-5xl">Loading</h1>
            </div>
          </template>
        </suspense>
      </transition>
    </template>
  </router-view>
</template>
<style scoped>
.loader-container {
  margin: 4rem auto;
}
</style>
