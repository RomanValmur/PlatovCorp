<template>
  <v-card width="500" height="200" class="d-flex basket-product-card">
    <v-icon
      icon="mdi-close"
      class="basket-product-card__icon-close"
      @click="deleteProduct"
    ></v-icon>
    <v-sheet
      class="d-flex justify-center align-center flex-shrink-0 basket-product-card__photo"
      width="30%"
      max-width="200"
      height="200"
    >
      <v-img width="76" height="60" src="@/assets/photo-camera.svg"></v-img>
    </v-sheet>
    <div class="basket-product-card__info">
      <v-card-title class="text-h5 basket-product-card__title">{{
        product.title
      }}</v-card-title>
      <v-card-text class="mb-2 text-subtitle-1 basket-product-card__text">{{
        product.description
      }}</v-card-text>
      <div class="d-flex text-body-1 basket-product-card__price">
        {{ formattedPrice }}
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { basket } = storeToRefs(store);

const props = defineProps({
  product: Object,
});

const formattedPrice = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",
}).format(props.product.price);

const deleteProduct = () => {
  store.setBasket(
    basket.value.filter((product) => product.id !== props.product.id)
  );
};
</script>

<style lang="scss">
.basket-product-card__info {
  padding: 20px;

  color: #333;
}

.v-card.basket-product-card {
  border-radius: 10px;
  background: #fff;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
}

.v-sheet.basket-product-card__photo {
  background-color: #bababa;
}

.v-card-title.basket-product-card__title {
  padding: 0;
}

.v-card-text.basket-product-card__text {
  display: -webkit-box;
  padding: 0;

  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  opacity: 0.5;
}

.basket-product-card {
  &__price {
    padding: 0;
  }

  &__icon-close.v-icon {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
