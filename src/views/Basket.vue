<template>
  <v-row class="pb-10">
    <Transition name="empty">
      <v-sheet v-show="isBasketEmpty" class="w-100 text-center my-auto">
        В корзине нет товаров
      </v-sheet>
    </Transition>
    <TransitionGroup>
      <v-col
        v-for="product in basket"
        :key="product.id"
        cols="12"
        class="d-flex justify-start"
      >
        <BasketProductCard :product="product"></BasketProductCard>
      </v-col>
    </TransitionGroup>
  </v-row>
</template>

<script setup>
import { computed } from "vue";
import BasketProductCard from "@/components/BasketProductCard.vue";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { basket } = storeToRefs(store);

const isBasketEmpty = computed(() => {
  return basket.value.length === 0;
});
</script>

<style lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.empty-enter-active,
.empty-leave-active {
  transition: opacity 0.1s ease 0.3s;
}

.empty-enter-from,
.empty-leave-to {
  opacity: 0;
}
</style>
