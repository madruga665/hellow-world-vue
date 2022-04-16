<template>
  <footer>
    <p>Criado com muito 💚 e carinho por @madruga665</p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterComponent",
});
</script>

<style scoped>
footer {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #16a085;
  color: #fff;
  padding: 0 2rem;
}
img {
  margin-right: 1rem;
}
</style>
