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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 25px 10px;
  gap: 50px;
}

@media screen and (min-width: 768px) {
  .home-container {
    flex-direction: row;
  }
}

a {
  text-decoration: none;
}
</style>
