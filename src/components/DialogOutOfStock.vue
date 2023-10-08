<template>
  <v-dialog v-model="isProductOutOfStock" width="auto">
    <v-card>
      <v-card-text class="text-center">
        К сожалению, товар закончился на складе
      </v-card-text>
      <v-card-actions>
        <v-btn variant="outlined" block @click="closeDialog">Печально</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useAppStore } from "@/store/app";
import { storeToRefs } from "pinia";

const store = useAppStore();
const { isProductOutOfStock } = storeToRefs(store);

const closeDialog = () => {
  store.setIsProductOutOfStock(false);
};
</script>
