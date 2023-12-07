<template>
  <div class="w-1/2 grid grid-cols-2 pt-14">
    <div class="item">
      <div class="relative font-font">
        <img :src="infoOne" />
        <button class="itemBtn">Записаться</button>
      </div>
      <div class="flex gap-6">
        <p>Дизайн четвертого ногтя в подарок</p>
        <p>0₽</p>
      </div>
      <button class="itemLink">Подробнее</button>
    </div>
    <div class="item">
      <div class="relative font-font">
        <img :src="infoTwo" />
        <button class="itemBtn">Записаться</button>
      </div>
      <div class="flex gap-6">
        <p>Французский маникюр + покрытие гель лак</p>
        <p>2300₽</p>
      </div>
      <button class="itemLink">Подробнее</button>
    </div>
    <div class="item">
      <div class="relative font-font">
        <img :src="infoThree" />
        <button class="itemBtn">Записаться</button>
      </div>
      <div class="flex gap-6">
        <p>Скидка 10% за удачное фото в Инстаграм</p>
        <p>900₽</p>
      </div>
      <button class="itemLink">Подробнее</button>
    </div>
    <div class="item">
      <div class="relative">
        <img :src="infoFour" />
        <button class="itemBtn">Записаться</button>
      </div>
      <div class="flex gap-6">
        <p>SPA-Процедура “Счастье для рук”</p>
        <p>3100₽</p>
      </div>
      <button class="itemLink">Подробнее</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import infoOne from "@/assets/infoOne.png";
import infoTwo from "@/assets/infoTwo.png";
import infoThree from "@/assets/infoThree.png";
import infoFour from "@/assets/infoFour.png";
</script>

<style>
.item {
  @apply flex flex-col items-start w-72 gap-4;
}

.itemBtn {
  @apply rounded-3xl bg-white text-purple absolute bottom-3 left-40 px-5 py-2;
}

.itemLink {
  @apply text-purple border border-solid border-white hover:after:content-['⟶'] hover:border-b-purple;
}
</style>
