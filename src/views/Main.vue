<template>
  <v-row class="pb-10">
    <TransitionGroup name="fade-main">
      <v-col
        v-for="product in slicedProducts"
        :key="product.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex justify-center"
      >
        <ProductCard :product="product"></ProductCard>
      </v-col>
    </TransitionGroup>
  </v-row>
  <ButtonShowMore></ButtonShowMore>
  <DialogOutOfStock />
</template>

<script setup>
import { ref, computed, onBeforeMount } from "vue";
import ProductCard from "@/components/ProductCard.vue";
import ButtonShowMore from "@/components/ButtonShowMore.vue";
import DialogOutOfStock from "@/components/DialogOutOfStock.vue";
import products from "@/api/products.json";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { visibleProductsCount } = storeToRefs(store);

onBeforeMount(() => store.setProducts(products));

const slicedProducts = computed(() => {
  return products.slice(0, visibleProductsCount.value);
});
</script>

<style lang="scss">
.fade-main-enter-active,
.fade-main-leave-active {
  transition: opacity 2s ease;
}

.fade-main-enter-from,
.fade-main-leave-to {
  opacity: 0;
}
</style>
