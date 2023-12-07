<template>
  <div class="flex pt-20 mb-9 mx-24 justify-between border-b-2">
    <button
      v-for="category in data"
      :key="category.id"
      class="navBtn"
      v-on:click="store.setCategory(category)">
      {{ category.title }}
    </button>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch("/api/category");

import { useStore } from "@/stores/myStore";

const store = useStore();
</script>

<style>
.navBtn {
  @apply text-ink text-xl static pb-9 text-center border border-solid border-white hover:border-b-purple hover:border hover:text-purple;
}
</style>
