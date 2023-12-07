<template>
  <div class="">
    <AppHeader />
    <div class="flex justify-between">
      <img :src="services" />
      <Info />
    </div>
    <div>
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<script lang="ts" setup>
import services from "@/assets/services.png";
</script>

<style></style>
