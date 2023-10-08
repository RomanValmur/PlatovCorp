<template>
  <v-card width="280" height="450" class="product-card">
    <v-sheet
      class="d-flex justify-center align-center product-card__photo"
      width="280"
      height="280"
    >
      <v-img width="106" height="84" src="@/assets/photo-camera.svg"></v-img>
    </v-sheet>
    <div class="product-card__info">
      <v-card-title class="text-h5 product-card__title">{{
        product.title
      }}</v-card-title>
      <v-card-text class="text-subtitle-1 product-card__text">{{
        product.description
      }}</v-card-text>
      <div class="d-flex justify-space-between align-center w-100">
        <div class="text-body-1 product-card__price">{{ price }}</div>
        <v-card-actions>
          <v-btn
            variant="plain"
            width="30"
            height="30"
            @click="addToBasket(product)"
            icon
            ><v-img
              src="@/assets/basket-icon.svg"
              width="16"
              height="20"
            ></v-img
          ></v-btn>
        </v-card-actions>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from "vue";
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const props = defineProps({
  product: Object,
});

const store = useAppStore();
const { basket } = storeToRefs(store);

const price = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",
}).format(props.product.price);

const addToBasket = (product) => {
  const isProductInBasket = basket.value.filter(
    (el) => el.id === product.id
  ).length;
  const isInStock = product.count > 0;

  if (isProductInBasket) return;
  if (!isInStock) {
    store.setIsProductOutOfStock(true);
    return;
  }

  store.setBasket([...basket.value, product]);
};
</script>

<style lang="scss">
.product-card__info {
  height: 170px;
  padding: 20px;

  color: #333;
}

.v-card.product-card {
  border-radius: 10px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
}

.v-sheet.product-card__photo {
  background-color: #bababa;
}

.v-card-title.product-card__title {
  padding: 0;
}

.v-card-text.product-card__text {
  display: -webkit-box;
  padding: 0;

  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;

  opacity: 0.5;
}

.v-list-item.product-card__price {
  padding: 0;
}
</style>
