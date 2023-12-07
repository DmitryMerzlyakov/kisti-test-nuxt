<template>
  <div class="card" v-for="card in content" :key="card.category">
    <svg v-if="card.hit == true" class="cardSvg">
      <use :xlink:href="`${sprite}#icon-hit`"></use>
    </svg>
    <p v-if="card.hit == true" class="hit">ХИТ</p>
    <div class="cardContent">
      <button
        class="text-left w-3/4 pl-8 font-light rounded-r-3xl hover:bg-peach hover:pr-2 hover:text-purple">
        {{ card.name }}
      </button>
      <p class="cardPrice">{{ changePrice(card.basePrice) }}₽</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import sprite from "@/assets/sprite.svg";
import { useStore } from "@/stores/myStore";

const store = useStore();

const props = defineProps(["content"]);
console.log(props);

function changePrice(value: number) {
  let newPriceDay = value + (value * 20) / 100;
  let newPriceMasterPremium = value * ((value * 5) / 100);
  let newPriceMasterTop = value * ((value * 10) / 100);

  if (store.categoryMaster === "premium" && store.timeOfDay === "nigth") {
    store.newPrice = newPriceMasterPremium + (newPriceMasterPremium * 20) / 100;
    return store.newPrice;
  }
  if (store.categoryMaster === "premium") {
    store.newPrice = newPriceMasterPremium;
    return store.newPrice;
  }
  if (store.categoryMaster === "premium" && store.timeOfDay === "day") {
    store.newPrice = newPriceMasterPremium;
    return store.newPrice;
  }
  if (store.categoryMaster === "top" && store.timeOfDay === "nigth") {
    store.newPrice = newPriceMasterTop + (newPriceMasterTop * 20) / 100;
    return store.newPrice;
  }
  if (store.categoryMaster === "top") {
    store.newPrice = newPriceMasterTop;
    return store.newPrice;
  }
  if (store.categoryMaster === "top" && store.timeOfDay === "day") {
    store.newPrice = newPriceMasterTop;
    return store.newPrice;
  }
  if (store.categoryMaster === "" && store.timeOfDay === "nigth") {
    store.newPrice = newPriceDay;
    return store.newPrice;
  }
  if (store.timeOfDay === "nigth") {
    store.newPrice = newPriceDay;
    return store.newPrice;
  } else {
    return value;
  }
}
</script>

<style lang="css">
.card {
  @apply bg-peach relative pb-8 pr-8 pt-8 rounded-md h-40 hover:bg-mango;
}

.cardSvg {
  @apply w-14 h-16 rounded-md absolute right-0 top-0;
}

.cardContent {
  @apply flex flex-col justify-between h-24;
}

.cardPrice {
  @apply text-pink pl-8 font-light text-2xl;
}

.hit {
  @apply text-white absolute right-3 top-4;
}
</style>
