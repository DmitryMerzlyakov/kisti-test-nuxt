<template>
  <footer
    class="bg-purple text-white flex-col justify-items-start px-20 py-20 font-font">
    <div class="w-7/12">
      <p class="text-mango text-xl mb-7 font-medium uppercase leading-5">
        Клиентам
      </p>
      <div class="flex justify-between">
        <div class="grid grid-cols-2 gap-2 mb-12">
          <p class="text">Услуги и цены</p>
          <p class="text">Полезная информация</p>
          <p class="text">Акции</p>
          <p class="text">Адреса салонов</p>
          <p class="text">Портфолио</p>
          <p class="text">Отзывы</p>
          <p class="text">Блог</p>
        </div>
        <div class="flex flex-col items-center gap-4 mr-1">
          <button>
            <img :src="google" />
          </button>
          <button>
            <img :src="apple" />
          </button>
        </div>
      </div>
      <div class="flex justify-between items-center">
        <div class="">
          <p class="text">© Все права зарегистрированы.</p>
          <p>ООО "КИСТОЧКИ Финанс", ИНН 7842143740</p>
        </div>
        <p class="text mr-6">Санкт Петербург 2020</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import google from "@/assets/googleplay.png";
import apple from "@/assets/appstore.png";
</script>

<style>
.text {
  @apply not-italic leading-5 font-light;
}
</style>
