<template>
  <div class="mx-24 flex justify-between gap-6">
    <div class="btnBox">
      <button @click="handleClickDay('day')" class="btn">
        <svg class="svg mr-1">
          <use :xlink:href="`${sprite}#icon-day`"></use>
          <use :xlink:href="`${sprite}#icon-sunny`"></use>
        </svg>
        <div class="btnWrapper">
          <p class="text">День*</p>
          <p class="text">с 10:00 до 21:00</p>
        </div>
      </button>
      <button @click="handleClickDay('nigth')" class="btn">
        <svg class="svg mr-1">
          <use :xlink:href="`${sprite}#icon-nigth`"></use>
        </svg>
        <div class="btnWrapper">
          <p class="text">Ночь</p>
          <p class="text">с 21:00 до 10:00</p>
        </div>
      </button>
    </div>
    <div class="btnBox">
      <button @click="handleClickMaster('')" class="btn">
        <svg class="svg mr-3 my-1">
          <use :xlink:href="`${sprite}#icon-master`"></use>
        </svg>
        <p class="text">Мастер</p>
      </button>
      <button @click="handleClickMaster('premium')" class="btn">
        <svg class="svg">
          <use :xlink:href="`${sprite}#icon-premiumMaster`"></use>
        </svg>
        <p class="text">Премиум-мастер</p>
      </button>
      <button @click="handleClickMaster('top')" class="btn">
        <svg class="svg">
          <use :xlink:href="`${sprite}#icon-topMaster`"></use>
        </svg>
        <p class="text">ТОП-мастер</p>
      </button>
    </div>
    <div class="h-full relative">
      <svg
        @click="hadldeSearch()"
        class="w-6 h-6 mr-1 absolute inset-y-5 start-4">
        <use :xlink:href="`${sprite}#icon-search`"></use>
      </svg>

      <input
        v-model="searchText"
        @change="store.handleChangeInput(searchText)"
        type="text"
        placeholder="Поиск услуги"
        class="bg-slate-100 rounded-full ps-12 p-5 border border-solid border-white" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import sprite from "@/assets/sprite.svg";
import { useStore } from "@/stores/myStore";

const store = useStore();

let searchText = "";

function handleClickDay(value: string) {
  store.timeOfDay = value;
}

function handleClickMaster(value: string) {
  store.categoryMaster = value;
}

function hadldeSearch() {
  store.handleChangeInput(searchText);
}
</script>

<style>
.btn {
  @apply bg-filter flex items-center justify-between pl-2 pr-8 m-1 gap-2 rounded-full hover:bg-pink hover:text-white;
}

.btnBox {
  @apply bg-filter flex gap-3 rounded-full;
}

.btnWrapper {
  @apply flex flex-col items-start w-3/4;
}

.svg {
  @apply w-11 h-11;
}

.text {
  @apply text-sm font-light;
}
</style>
