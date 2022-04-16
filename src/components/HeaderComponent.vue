<template>
  <header>
    <router-link to="/">
      <img src="../assets/logo.png" alt="Logo Vuejs" width="30" height="30" />
    </router-link>
    <h3>Olá, Vue js</h3>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderComponent",
});
</script>

<style scoped>
header {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  background-color: #16a085;
  color: #fff;
  padding: 0 2rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
img {
  margin-right: 1rem;
}
</style>
