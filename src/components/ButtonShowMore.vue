<template>
  <div
    v-if="visibleProductsCount < products.length"
    class="d-flex justify-end pr-7"
  >
    <v-btn @click="showMore" class="btn-show-more">Показать еще</v-btn>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { visibleProductsCount, products } = storeToRefs(store);

const showMore = () => {
  store.setVisibleProductsCount(visibleProductsCount.value + 4);
};
</script>

<style lang="scss">
.btn-show-more {
  display: flex;
  width: 142px;
  height: 25px;
  padding: 3px 18px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
