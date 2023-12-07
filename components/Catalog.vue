<template>
  <div>
    <CatalogSort />
    <p class="mx-24 mb-6 mt-12 text-16 font-light">
      * Обратите внимание, цены на услуги днем и вечером различаются
    </p>
    <div class="grid grid-cols-4 gap-5 mx-24 mb-28">
      <CatalogCard :content="filter()" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/stores/myStore";
import { type TCard } from "@/type";

const store = useStore();

const { data } = useFetch("/api/price");

const filter = () => {
  let content;
  if (store.stringForSearch) {
    content = data.value?.filter((item: TCard) =>
      item.name.toLowerCase().includes(store.stringForSearch.toLowerCase()),
    );
  } else {
    content = data.value?.filter(
      (item: TCard) => item.category === store.category.id,
    );
  }
  return content;
};
</script>

<style></style>
