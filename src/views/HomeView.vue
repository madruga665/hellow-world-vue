<template>
  <main class="container">
    <HeaderComponent />
    <Card />
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import Card from "../components/Card.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HeaderComponent,
    Card,
    FooterComponent,
  },
});
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }
</style>
