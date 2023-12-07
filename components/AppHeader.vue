<template>
  <header class="flex justify-between w-full px-20 py-10 font-font">
    <img :src="logo" alt="Кисточки" />
    <div class="flex items-center gap-7">
      <div class="flex gap-1.5">
        <svg class="w-7 h-7">
          <use :xlink:href="`${sprite}#icon-phone`"></use>
        </svg>
        <p>+7 (812) 604-89-09</p>
      </div>
      <button class="rounded-3xl border-none bg-purple px-5 py-3 text-white">
        Онлайн запись
      </button>
    </div>
  </header>
</template>

<script lang="ts" setup>
import logo from "@/assets/logo.png";
import sprite from "@/assets/sprite.svg";
</script>

<style></style>
