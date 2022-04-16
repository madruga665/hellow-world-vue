<template>
  <main class="container">
    <HeaderComponent />
    <slot></slot>
    <FooterComponent />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";

export default defineComponent({
  name: "ViewTemplate",
  components: {
    HeaderComponent,
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
  slot {
    border: 2px solid red;
  }
</style>
