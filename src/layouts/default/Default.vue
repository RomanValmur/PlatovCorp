<template>
  <v-app>
    <v-container class="app-container">
      <div class="d-flex justify-space-between w-100 py-8 px-2 px-md-12 header">
        <v-img height="40px" max-width="145" src="@/assets/logo.svg"></v-img>
        <nav class="header__navigation text-subtitle-1">
          <router-link to="/">Главная</router-link>
          <router-link to="/basket">Корзина</router-link>
        </nav>
      </div>
      <default-view />
    </v-container>
  </v-app>
</template>

<script setup>
import DefaultView from "./View.vue";
</script>

<style lang="scss">
.v-container.app-container {
  max-width: 1440px;
}

.header {
  display: flex;
  gap: 12px;

  &__navigation {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 24px;
    align-items: center;
  }

  &__navigation > .router-link-exact-active {
    color: #ba967d;
    text-decoration: none;
  }

  &__navigation > a {
    color: var(--black, #333);
    text-decoration: none;
  }
}
</style>
