<template>
  <ViewTemplate>
    <section class="home-container">
      <router-link to="/rickandmorty">
        <LinkCard title="Rick and Morty" content="Pagina feita com a api do Rick and Morty" />
      </router-link>
      <router-link to="/forms">
        <LinkCard title="Formulário" content="Formulario simples" />
      </router-link>
      <router-link to="/counter">
        <LinkCard title="Contador" content="Super Contador" />
      </router-link>
    </section>
  </ViewTemplate>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ViewTemplate from "../templates/ViewTemplate.vue";
import LinkCard from "../components/LinkCard.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    ViewTemplate,
    LinkCard,
  },
});
</script>

<style scoped>
.home-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 50px;
}
a {
  text-decoration: none;
}
</style>
