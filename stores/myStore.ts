import { defineStore } from "pinia";
import { type TState, type TCard } from "@/type";

export const useStore = defineStore("store", () => {
  const category = ref({
    id: 1,
    title: "Брови и ресницы",
    slug: "brovi-i-resnicy",
  });

  function setCategory(value: TState) {
    category.value = value;
  }

  const { data } = useFetch("/api/price");

  let timeOfDay = "";

  let newPrice = 0;

  let categoryMaster = "";

  let stringForSearch = ref("");

  function handleChangeInput(value: string) {
    stringForSearch.value = value;
  }

  return {
    category,
    setCategory,
    timeOfDay,
    categoryMaster,
    stringForSearch,
    handleChangeInput,
    newPrice,
  };
});
