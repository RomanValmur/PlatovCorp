import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const products = ref();
  const basket = ref([]);
  const visibleProductsCount = ref(4);
  const isProductOutOfStock = ref(false);

  function setBasket(newBasket) {
    basket.value = newBasket;
  }

  function setProducts(newProducts) {
    products.value = newProducts;
  }

  function setVisibleProductsCount(count) {
    visibleProductsCount.value = count;
  }

  function setIsProductOutOfStock(boolean) {
    isProductOutOfStock.value = boolean;
  }

  return {
    basket,
    setBasket,
    products,
    setProducts,
    visibleProductsCount,
    setVisibleProductsCount,
    isProductOutOfStock,
    setIsProductOutOfStock,
  };
});
